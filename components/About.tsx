import { CircleDot, ArrowUpRight } from "lucide-react";

export function SectionLabel({
  children,
  center,
  light = false,
}: {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`flex items-center gap-x-2 mb-4 ${center ? "justify-center" : ""}`}>
      {/* <CircleDot
        size={18}
        className={light ? "text-white/80 shrink-0" : "text-accent shrink-0"}
      /> */}
      {!light ?<img src="/home/ico-1.svg" alt="Feature 1" className="w-5 h-5 object-cover" /> : <img src="/home/ico-2.svg" alt="Feature 2" className="w-5 h-5 object-cover" />}
      <span
        className={`font-semibold text-[14px] tracking-wide ${light ? "text-white/80" : "text-primary"
          }`}
      >
        {children}
      </span>
    </div>
  );
}

export function PillButton({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 font-semibold text-[13.5px] pl-6 pr-2 py-2 rounded-full no-underline hover:opacity-90 transition-opacity ${light
        ? "bg-white text-neutral-900"
        : "bg-primary text-white"
        }`}
    >
      {children}
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-accent`}
      >
        <ArrowUpRight size={15} className="text-white" />
      </span>
    </a>
  );
}

export default function About() {
  return (
    <section className="bg-white py-16">
      <div className="container grid grid-cols-2 gap-14 items-start">

        {/* Left: text */}
        <div>
          <SectionLabel>About Us</SectionLabel>

           <h2 className="text-neutral-900 text-3xl font-bold leading-tight m-0">
            A leading manufacturer and designer of orthopaedic trauma medical
            devices with 30 years experience.
          </h2>
          <div className="flex flex-col gap-5 mt-5">

         

          <p className="text-[14px] leading-relaxed text-neutral-500 m-0">
            Austofix is a proudly South Australian medical device company leading
            in the areas of research, design, manufacturing and distribution of
            world-class orthopaedic devices.
          </p>

          <p className="text-[14px] leading-relaxed text-neutral-500 m-0">
            The Austofix team is dedicated, diverse and professional with extensive
            experience in developing new devices, from concept to a fully commercialised
            product with regulatory approval ready for worldwide distribution.
          </p>

          <div className="mt-2">
            <PillButton href="/about">Find Out More</PillButton>
          </div>
        </div>
        </div>

        {/* Right: image placeholder */}
        {/* REPLACE with: <Image src="/building.jpg" fill className="object-cover rounded" alt="Austofix building" /> */}
        <div
          className="w-full bg-neutral-200 flex items-center justify-center"
          aria-label="Building image placeholder"
        >
          <img src="/home/about.jpg" className="rounded" alt="Building image placeholder" />
        </div>

      </div>
    </section>
  );
}
