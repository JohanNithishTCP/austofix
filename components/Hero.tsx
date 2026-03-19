export default function Hero() {
  return (
    <section className="relative w-full min-h-[520px] bg-black flex items-end justify-center">

      {/* IMAGE / VIDEO PLACEHOLDER ─────────────────────────────
          Replace this div with your <Image> or <video>:
          <Image src="/hero.jpg" fill className="object-cover" alt="Hero" priority />
          ───────────────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center" aria-hidden="true">
        <span className="text-[#2a2a2a] text-xs font-mono tracking-[0.1em]">
          HERO IMAGE / VIDEO
        </span>
      </div>

      {/* Gradient so text stays legible over any image */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        aria-hidden="true"
      />

      {/* Text block */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pb-14">
        <h1 className="text-white text-4xl font-bold tracking-[0.1em] uppercase mb-2.5">
          Welcome to Austofix
        </h1>

        <p className="text-white/80 text-[15px] leading-relaxed max-w-[520px] mb-6">
          A leading manufacturer and designer of orthopaedic trauma medical
          devices with 25 years experience.
        </p>

        {/* Carousel dots */}
        <div className="flex items-center gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={[
                "block rounded-full",
                i === 0 ? "w-2.5 h-2.5 bg-white" : "w-2 h-2 bg-white/40",
              ].join(" ")}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
