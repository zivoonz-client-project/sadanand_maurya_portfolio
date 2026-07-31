import { NextResponse } from "next/server";
import { addReview, getReviews } from "@/lib/reviews";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const reviews = await getReviews();
    return NextResponse.json({ reviews });
  } catch (err) {
    console.error("GET /api/reviews failed:", err);
    return NextResponse.json(
      { error: "Could not load reviews." },
      { status: 500 }
    );
  }
}

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));

    // Honeypot: bots fill hidden fields, humans leave them empty.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ ok: true }); // silently drop
    }

    const name = clean(body.name, 60);
    const company = clean(body.company, 80);
    const project = clean(body.project, 80);
    const message = clean(body.message, 1000);
    const rating = Math.min(5, Math.max(1, Number(body.rating) || 5));

    if (name.length < 2) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Please write at least a few words about the work." },
        { status: 400 }
      );
    }

    const review = await addReview({
      name,
      company: company || undefined,
      project: project || undefined,
      rating,
      message,
    });

    return NextResponse.json({ review }, { status: 201 });
  } catch (err) {
    console.error("POST /api/reviews failed:", err);
    return NextResponse.json(
      { error: "Could not submit review. Please try again." },
      { status: 500 }
    );
  }
}
