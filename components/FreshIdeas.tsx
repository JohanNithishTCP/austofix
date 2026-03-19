import { SectionLabel, PillButton } from "./About";

export default function FreshIdeas() {
  return (
    <section className="bg-cleanroom py-16">
      <div className="container grid grid-cols-2 gap-14 items-center">

        {/* Left: image placeholder */}
        {/* REPLACE with: <Image src="/fresh-ideas.jpg" fill className="object-cover rounded-lg" alt="Fresh ideas" /> */}
        <div
          className="w-full rounded-lg"
          style={{
            aspectRatio: "4/3",
            backgroundImage:
              "linear-gradient(45deg,rgba(255,255,255,.10) 25%,transparent 25%)," +
              "linear-gradient(-45deg,rgba(255,255,255,.10) 25%,transparent 25%)," +
              "linear-gradient(45deg,transparent 75%,rgba(255,255,255,.10) 75%)," +
              "linear-gradient(-45deg,transparent 75%,rgba(255,255,255,.10) 75%)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
            background: "rgba(255,255,255,0.15)",
          }}
          aria-label="Fresh ideas image placeholder"
        />

        {/* Right: text */}
        <div>
          <SectionLabel light>Fresh Ideas</SectionLabel>

          <h2 className="text-white text-3xl font-bold leading-tight m-0">
            Do you have an innovative fresh idea?
          </h2>
 <div className="flex flex-col gap-4 mt-5">
          <p className="text-white/85 text-[14px] leading-relaxed m-0">
            Austofix wants to hear from you. Our aim is to provide clinicians with
            great products that are intuitive. Fresh ideas often derive from the
            users, this is why we appreciate any feedback, and welcome the
            opportunity to create new and improved products based on your input.
          </p>

          <p className="text-white/85 text-[14px] leading-relaxed m-0">
            Let us bring your manufacturing, design &amp; regulatory expertise and
            bring your idea to life domestic market.
          </p>

          <p className="text-white/85 text-[14px] leading-relaxed m-0">
            We are committed to helping grow our industry and are actively seeking
            to on-board more partners.
          </p>

          <div className="mt-2">
            <PillButton href="/ideas" light>Find Out More</PillButton>
          </div>
        </div>
        </div>

      </div>
    </section>
  );
}
