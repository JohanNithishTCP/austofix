import { CircleDot } from "lucide-react";
import { SectionLabel } from "./About";

const PARTNERS = [
  { id: 1, name: "extremedies", img: "partners-1.png" },
  { id: 2, name: "perios", img: "partners-2.png" },
  { id: 3, name: "Optofab", img: "partners-3.png" },
  { id: 4, name: "device synergies", img: "partners-4.png" },
  { id: 5, name: "IPAS", img: "partners-5.jpg" },
  { id: 6, name: "Medical Device Partnering Program", img: "partners-6.png" },
];

export default function Partners() {
  return (
    <section className="bg-white py-16">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-12">
          <SectionLabel center={true}>Our Partners</SectionLabel>

          <h2 className="text-neutral-900 text-3xl font-bold leading-tight m-0">
            Become another one of our successful collaborative partners
          </h2>
        </div>

        {/* Partner logo grid — 3 columns × 2 rows */}
        <div className="grid grid-cols-3 gap-5">
          {PARTNERS.map(({ id, name, img }) => (
            <div
              key={id}
              className="border border-gray-200 rounded-lg flex items-center justify-center py-10 px-6 hover:shadow-md transition-shadow"
            >
              {/* REPLACE each div with an <Image src="/partner-logo.png" width={160} height={60} className="object-contain" alt={name} /> */}
              <img src={`/home/${img}`} alt={name} className="object-contain h-12" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
