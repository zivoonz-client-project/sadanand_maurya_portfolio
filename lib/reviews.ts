import { Redis } from "@upstash/redis";

export type Review = {
  id: string;
  name: string;
  company?: string;
  project?: string;
  rating: number;
  message: string;
  createdAt: number;
};

const REVIEWS_KEY = "portfolio:reviews";

// Upstash Redis is used when the two env vars are present. Otherwise we fall
// back to a temporary in-memory list so the site still works in local/demo
// mode (data resets when the server restarts).
const hasRedis =
  !!process.env.UPSTASH_REDIS_REST_URL &&
  !!process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = hasRedis
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })
  : null;

// In-memory fallback (per-process, non-persistent).
const memory: Review[] = [
  {
    id: "seed-1",
    name: "Tryeno Team",
    company: "Tryeno Software Development",
    project: "ShopNest",
    rating: 5,
    message:
      "Sadanand delivered a clean, well-architected Flutter app on time. Great communication and solid problem solving throughout the project.",
    createdAt: 1730000000000,
  },
];

export async function getReviews(): Promise<Review[]> {
  if (redis) {
    // Stored newest-first via lpush; each item is a Review object.
    const items = await redis.lrange<Review>(REVIEWS_KEY, 0, 199);
    return items ?? [];
  }
  return [...memory].sort((a, b) => b.createdAt - a.createdAt);
}

export async function addReview(
  input: Omit<Review, "id" | "createdAt">
): Promise<Review> {
  const now = Date.now();
  const review: Review = {
    ...input,
    id: `rev_${now}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: now,
  };

  if (redis) {
    await redis.lpush(REVIEWS_KEY, review);
    await redis.ltrim(REVIEWS_KEY, 0, 499);
  } else {
    memory.unshift(review);
  }
  return review;
}
