"use client";

import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";

export default function UpcomingLaunch() {
  return (
    <section id="upcoming" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Product Spotlight · In Active Development"
          title={
            <>
              Next Big Launch: <span className="gradient-text">MyDigi</span>
            </>
          }
          align="center"
        >
          An all-in-one Smart Product, Warranty, Expense, Service &amp; Invoice Vault mobile application — engineered with Flutter and powered by AI OCR. Launching soon exclusively on the Google Play Store.
        </SectionHeading>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Product Story, Features & Status */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://mydigi.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm hover:bg-emerald-100 transition"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Website Live (mydigi.co.in) ↗
                </a>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-600" />
                  </span>
                  App in Closed Testing
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
                  <svg className="h-3.5 w-3.5 fill-current text-indigo-600" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186a2.38 2.38 0 0 1-.22-.988V2.802c0-.363.078-.7.22-.988zm11.242 11.243l2.257 2.256-11.89 6.865 9.633-9.121zm0-2.114L5.218 1.822l11.89 6.865-2.257 2.256zm1.485 1.057l3.654 2.11a1.238 1.238 0 0 1 0 2.146l-3.654 2.11-2.45-2.45 2.45-2.45z"/>
                  </svg>
                  Google Play (Testing)
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
                  📱 Flutter &amp; Dart
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-800">
                  🤖 AI Invoice OCR
                </span>
              </div>

              {/* Tagline in English */}
              <blockquote className="mt-5 border-l-2 border-accent pl-4 text-base sm:text-lg font-medium italic text-slate-800">
                “Track every product’s expenses, warranties &amp; invoices — unified in one smart app.”
              </blockquote>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
                <strong className="text-slate-900">MyDigi</strong> eliminates the everyday hassle of misplaced paper invoices, forgotten warranty deadlines, and untracked repair costs. Built with <strong className="text-slate-900">Flutter &amp; Material 3</strong>, it gives homeowners and gadget owners a complete digital passport and expense ledger for every physical asset they own.
              </p>
            </Reveal>

            {/* 4 Feature highlight cards */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <div className="card p-4 h-full border border-border hover:border-accent/40 hover:shadow-md transition">
                  <span className="text-2xl">🔍</span>
                  <h4 className="mt-2 text-sm font-semibold text-slate-900">AI Invoice OCR Scanner</h4>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    Real-time camera scanner auto-extracts product names, purchase dates, prices, serial numbers &amp; warranty durations directly from receipts.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="card p-4 h-full border border-border hover:border-accent/40 hover:shadow-md transition">
                  <span className="text-2xl">⚠️</span>
                  <h4 className="mt-2 text-sm font-semibold text-slate-900">Proactive Expiry Alerts</h4>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    Critical 7-day countdown notices alert you before warranties expire, so you can claim free services or OEM replacements in time.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="card p-4 h-full border border-border hover:border-accent/40 hover:shadow-md transition">
                  <span className="text-2xl">🏷️</span>
                  <h4 className="mt-2 text-sm font-semibold text-slate-900">TCO &amp; QR Asset Passports</h4>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    Tracks complete Total Cost of Ownership (Purchase + Repairs + AMC + Accessories) with instant sharable QR code passports.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="card p-4 h-full border border-border hover:border-accent/40 hover:shadow-md transition">
                  <span className="text-2xl">🔒</span>
                  <h4 className="mt-2 text-sm font-semibold text-slate-900">Encrypted Vault &amp; Claims</h4>
                  <p className="mt-1 text-xs text-muted leading-relaxed">
                    Private cloud archive for invoices, AMC contracts, user manuals, and a dedicated center to file and track OEM warranty claims.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Launch CTA Bar */}
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://mydigi.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-5 py-3 text-sm shadow-md"
                >
                  <span>Visit Live Website (mydigi.co.in)</span>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>

                <div className="inline-flex items-center gap-2 rounded-xl border border-sky-300 bg-sky-50 px-4 py-3 text-xs font-semibold text-sky-800 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-600" />
                  </span>
                  <span>Android App in Closed Testing</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive App Interface in a Realistic Smartphone Chassis */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <TiltCard max={7}>
                {/* Smartphone Device Chassis */}
                <div className="relative mx-auto w-full max-w-[310px] sm:max-w-[360px] rounded-[38px] sm:rounded-[46px] border-[6px] sm:border-[9px] border-slate-900 bg-slate-900 p-2 sm:p-2.5 shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/40">
                  {/* Left Volume Rocker */}
                  <span className="absolute -left-[8px] sm:-left-[12px] top-24 h-12 w-[3px] rounded-l-md bg-slate-700 hidden sm:block" />
                  <span className="absolute -left-[8px] sm:-left-[12px] top-40 h-12 w-[3px] rounded-l-md bg-slate-700 hidden sm:block" />
                  {/* Right Power Key */}
                  <span className="absolute -right-[8px] sm:-right-[12px] top-32 h-14 w-[3px] rounded-r-md bg-slate-700 hidden sm:block" />

                  {/* Top Bezel Speaker & Punch-hole Camera */}
                  <div className="relative mb-1 flex items-center justify-between px-6 pt-1 text-[11px] font-semibold text-slate-800">
                    <span className="font-medium text-slate-700">9:41</span>
                    {/* Centered Camera Punch-hole */}
                    <div className="absolute left-1/2 top-1.5 -translate-x-1/2 flex items-center gap-1">
                      <span className="h-3 w-3 rounded-full bg-slate-950 ring-2 ring-slate-800" />
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <span className="text-[10px]">5G</span>
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                        <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4z"/>
                      </svg>
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                        <path d="M16 4h-2V2h-4v2H8c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Inner Screen Display */}
                  <div className="relative overflow-hidden rounded-[36px] bg-white p-4 sm:p-5 border border-slate-100 shadow-inner">
                    {/* Top in-app header */}
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 text-xs font-black text-white shadow-sm">
                          MD
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">MyDigi Vault</p>
                          <p className="text-[10px] text-muted">Smart Asset &amp; Warranty Hub</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                          Google Play
                        </span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4efe6] text-slate-700 text-xs">
                          🔔
                        </span>
                      </div>
                    </div>

                    {/* Urgent 7-day Alert banner */}
                    <div className="mt-3 flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 p-2.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">⚠️</span>
                        <div>
                          <p className="text-[11px] font-semibold text-amber-800">2 Warranties Expiring</p>
                          <p className="text-[9px] text-amber-700/80">Action required within 7 days</p>
                        </div>
                      </div>
                      <span className="rounded-lg bg-amber-200/70 px-2 py-0.5 text-[10px] font-bold text-amber-800">
                        View
                      </span>
                    </div>

                    {/* KPI grid */}
                    <div className="mt-3 grid grid-cols-3 gap-1.5 text-center">
                      <div className="rounded-lg border border-border bg-[#faf8f5] p-2">
                        <p className="text-[9px] text-muted">Total Assets</p>
                        <p className="mt-0.5 text-xs font-bold text-slate-900">₹1,84,500</p>
                      </div>
                      <div className="rounded-lg border border-border bg-[#faf8f5] p-2">
                        <p className="text-[9px] text-muted">Active</p>
                        <p className="mt-0.5 text-xs font-bold text-emerald-600">14 Items</p>
                      </div>
                      <div className="rounded-lg border border-border bg-[#faf8f5] p-2">
                        <p className="text-[9px] text-muted">Free AMC</p>
                        <p className="mt-0.5 text-xs font-bold text-blue-600">3 Visits</p>
                      </div>
                    </div>

                    {/* Sample Asset Cards */}
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between rounded-xl border border-border bg-white hover:bg-[#faf8f5] p-2 text-xs transition">
                        <div className="flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f4efe6] text-sm">
                            💻
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-slate-900">MacBook Pro M3</p>
                            <p className="text-[9px] text-muted">Apple Care · Active till 2027</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-medium text-emerald-700 border border-emerald-200">
                          Protected
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-border bg-white hover:bg-[#faf8f5] p-2 text-xs transition">
                        <div className="flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f4efe6] text-sm">
                            ❄️
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-slate-900">Samsung Refrigerator</p>
                            <p className="text-[9px] text-muted">Compressor Warranty: 10 Yrs</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[9px] font-medium text-blue-700 border border-blue-200">
                          AMC Active
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-border bg-white hover:bg-[#faf8f5] p-2 text-xs transition">
                        <div className="flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f4efe6] text-sm">
                            🎧
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-slate-900">Sony WH-1000XM5</p>
                            <p className="text-[9px] text-muted">Invoice verified in vault</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[9px] font-medium text-amber-700 border border-amber-200">
                          Expires 5d
                        </span>
                      </div>
                    </div>

                    {/* Bottom Status pill */}
                    <div className="mt-3 flex items-center justify-between rounded-xl bg-[#faf8f5] border border-border p-2 text-[10px]">
                      <span className="flex items-center gap-1.5 text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Flutter Engine 3.x
                      </span>
                      <span className="font-semibold text-emerald-600 flex items-center gap-1">
                        <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                          <path d="M3.609 1.814L13.793 12 3.61 22.186a2.38 2.38 0 0 1-.22-.988V2.802c0-.363.078-.7.22-.988zm11.242 11.243l2.257 2.256-11.89 6.865 9.633-9.121zm0-2.114L5.218 1.822l11.89 6.865-2.257 2.256zm1.485 1.057l3.654 2.11a1.238 1.238 0 0 1 0 2.146l-3.654 2.11-2.45-2.45 2.45-2.45z"/>
                        </svg>
                        Google Play Soon
                      </span>
                    </div>

                    {/* Android Gesture Bar */}
                    <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-slate-300" />
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
