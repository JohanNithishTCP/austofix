"use client";

import Image from "next/image";
import screw from "@/public/screw.png";

import p1 from "@/public/partner1.png";
import p2 from "@/public/partner2.png";
import p3 from "@/public/partner3.png";
import p4 from "@/public/partner4.png";
import p5 from "@/public/partner5.png";
import p6 from "@/public/partner6.png";

export default function Partners() {
  const partners = [p1, p2, p3, p4, p5, p6];

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Small Label */}
        <p
          data-aos="fade-up"
          className="flex justify-center items-center gap-2 text-[#6CA033] text-sm mb-3">
          <span className="w-3 h-3 bg-[#5D9732] rounded-full">
            <Image
              src={screw}
              alt="idea"
              className="w-full h-full object-cover"
            />
          </span>
          Our Partners
        </p>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
          Become another one of our successful collaborative partners
        </h2>

        {/* Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl h-32 flex items-center justify-center shadow-sm hover:shadow-md transition">
              <Image
                src={logo}
                alt={`partner-${index}`}
                className="object-contain h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
