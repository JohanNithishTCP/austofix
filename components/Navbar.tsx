import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Homes",      href: "/",           active: true },
  { label: "About us",   href: "/about" },
  { label: "Implants",   href: "/implants" },
  { label: "Clean Room", href: "/clean-room",  dropdown: true },
  { label: "Ideas",      href: "/ideas" },
  { label: "Contact us", href: "/contact" },
  { label: "eFU",        href: "/efu" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img src="/logo.png" alt="Austofix Logo" className="h-10 w-auto" />
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-7">
          {LINKS.map(({ label, href, active, dropdown }) => (
            <Link
              key={label}
              href={href}
              className={[
                "flex items-center gap-0.5 text-[13.5px] whitespace-nowrap no-underline transition-colors",
                active
                  ? "font-semibold text-neutral-900 underline underline-offset-4"
                  : "font-normal text-neutral-500 hover:text-neutral-900",
              ].join(" ")}
            >
              {label}
              {dropdown && <ChevronDown size={12} />}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
         href="/about"
                className="inline-flex items-center gap-2.5 bg-primary text-white font-semibold text-[13.5px] pl-6 pr-2 py-2 rounded-full no-underline hover:opacity-90 transition-opacity"
              >
               Make An Appointment
                <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <ArrowUpRight size={15} className="text-white" />
                </span>
        </Link>

      </div>
    </header>
  );
}
