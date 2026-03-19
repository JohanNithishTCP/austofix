const CARDS = [
  {
    id: 1,
    text: "Rapid turn-around by in-house 3D printing and biomechanical testing.",
    img: "/home/abt-1.jpg",
  },
  {
    id: 2,
    text: "Equipped with in-house CMM, vision system, cleanroom, and sterilization.",
    img: "/home/abt-2.jpg",
  },
  {
    id: 3,
    text: "Single-column force testing.",
    img: "/home/abt-3.jpg",
  },
];

export default function FeatureCards() {
  return (
    <div className="mb-17">
      <div className="container grid grid-cols-3 gap-8">
        {CARDS.map(({ id, text, img }) => (
          <div key={id} className="bg-[#3C7324] flex flex-row items-center gap-4 px-5 py-5 rounded-sm">

            {/* Square image — REPLACE with <Image src="…" width={80} height={80} className="object-cover rounded" alt="…" /> */}
            <div
              className="shrink-0 w-20 h-20 bg-black/40 rounded flex items-center justify-center"
             
            >
              <img src={img} alt={img} className="object-cover rounded" />
            </div>

            <p className="text-white/90 text-[13px] leading-snug m-0">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
