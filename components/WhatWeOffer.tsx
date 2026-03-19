import { CircleDot, CheckCircle2, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./About";
import Link from "next/link";

const BULLETS = [
  "Access to a global network across the Middle East, Europe, Asia, South America, and Africa.",
  "Access to our patented variable angle screw technology",
  "Streamlined entry into the Australian market.",
];

export default function WhatWeOffer() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="container grid grid-cols-2 gap-14 items-center">

        {/* Left: image placeholder */}
        {/* REPLACE with: <Image src="/offer.jpg" fill className="object-cover rounded-lg" alt="What we offer" /> */}
        <div
          className="w-full rounded-lg bg-neutral-200 flex items-center justify-center"
          style={{ aspectRatio: "4/3" }}
          aria-label="What we offer image placeholder"
        >
          <span className="text-neutral-400 text-[11px] font-mono">OFFER IMAGE</span>
        </div>

        {/* Right: text */}
        <div>
          <SectionLabel>What can we offer?</SectionLabel>

          <h2 className="text-neutral-900 text-3xl font-bold leading-tight m-0">
            Turning ideas into market-ready medical solutions
          </h2>
          <div className="flex flex-col gap-5 mt-5">


            <p className="text-neutral-500 text-[14px] leading-relaxed m-0">
              Our 25 years of Medical Device experience and a high quality &amp;
              responsibly commercialisation platform for any Class I – Class IIb
              Medical Devices.
            </p>

            {/* Bullet list */}
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {BULLETS.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-accent shrink-0 mt-0.5"
                    fill="currentColor"
                    strokeWidth={0}
                  />
                  <span className="text-neutral-500 text-[13.5px] leading-snug">{text}</span>
                </li>
              ))}
            </ul>

            {/* View More button */}
            <div className="mt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 bg-accent text-white font-semibold text-[13.5px] pl-6 pr-2 py-2 rounded-full no-underline hover:opacity-90 transition-opacity"
              >
                View More
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <ArrowUpRight size={15} className="text-white" />
                </span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
