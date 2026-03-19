import { SectionLabel, PillButton } from "./About";

export default function CleanRoom() {
  return (
    <section className="bg-cleanroom py-16">
      <div className="container grid grid-cols-2 gap-14 items-center">

        {/* Left: text */}
        <div>
          <SectionLabel light>Clean Room</SectionLabel>

          <h2 className="text-white text-3xl font-bold leading-tight m-0">
            A leading manufacturer and designer of orthopaedic trauma medical
            devices with 30 years experience.
          </h2>
          <div className="flex flex-col gap-5 mt-5">

          <p className="text-white/85 text-[14px] leading-relaxed m-0">
            At Austofix, our commitment to manufacturing excellence is underpinned
            by our state-of-the-art ISO Class 8 cleanroom facility. Certified to
            ISO 14644-3, our cleanroom meets stringent international standards for
            airborne particulate cleanliness and environmental control.
          </p>

          <p className="text-white/85 text-[14px] leading-relaxed m-0">
            Our cleanroom is a critical part of our production process, enabling us
            to maintain contamination control while supporting the manufacture of
            safe, reliable, and effective medical technologies.
          </p>

          <div className="mt-2">
            <PillButton href="/clean-room" light>Find Out More</PillButton>
          </div>
        </div>
        </div>

        {/* Right: image placeholder */}
        {/* REPLACE with: <Image src="/cleanroom.jpg" fill className="object-cover rounded-lg" alt="Clean room facility" /> */}
        <div
          className="w-full rounded-lg bg-white/15"
          style={{
            aspectRatio: "4/3",
            backgroundImage:
              "linear-gradient(45deg,rgba(255,255,255,.08) 25%,transparent 25%)," +
              "linear-gradient(-45deg,rgba(255,255,255,.08) 25%,transparent 25%)," +
              "linear-gradient(45deg,transparent 75%,rgba(255,255,255,.08) 75%)," +
              "linear-gradient(-45deg,transparent 75%,rgba(255,255,255,.08) 75%)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
          }}
          aria-label="Cleanroom image placeholder"
        />

      </div>
    </section>
  );
}
