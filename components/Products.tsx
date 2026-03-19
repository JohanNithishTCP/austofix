import { CircleDot } from "lucide-react";
import { SectionLabel } from "./About";

const PRODUCTS = [
  { id: 1, name: "Nails",  img: "orthopaedic-1.jpg"  },
  { id: 2, name: "Plates", img: "orthopaedic-2.jpg" },
  { id: 3, name: "Screws", img: "orthopaedic-3.png" },
];

export default function Products() {
  return (
    <section className="bg-white py-16">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-10">
 
             <SectionLabel center={true}>About Our Orthopaedic Products</SectionLabel>
            

          <h2 className="text-neutral-900 text-3xl font-bold leading-tight max-w-2xl mx-auto mb-4">
            Orthopaedic Solutions for Strength and Precision
          </h2>

          <p className="text-neutral-500 text-[14px] leading-relaxed max-w-2xl mx-auto">
            Austofix develops innovative orthopaedic devices designed for simplicity, stability, and
            strength. Backed by advanced research, precision manufacturing, and strict quality standards,
            our products deliver reliable performance and improved clinical outcomes for surgeons and
            patients worldwide.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-5">
          {PRODUCTS.map(({ id, name, img }) => (
            <div key={id} className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
              {/* REPLACE with <Image src="…" width={400} height={300} className="w-full object-cover" alt={name} /> */}
              <div
                className="w-full flex items-center justify-center"
              >
                <img src={`/home/${img}`} alt={name} className="object-cover aspect-video" />
              </div>
              <div className="px-4 py-3.5 text-center">
                <span className="text-neutral-900 font-medium text-[15px]">{name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
