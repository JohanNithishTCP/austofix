"use client";

const QUICK_LINKS = ["Home", "About us", "Implants", "Clean Room", "Ideas", "eFU"];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">

      {/* Main grid — 5 columns */}
      <div className="container pt-14 pb-10 grid grid-cols-[1.4fr_0.9fr_1fr_1fr_0.7fr] gap-8 items-start">

        {/* Col 1: Logo + Newsletter */}
        <div>
          <div className="mb-5">
            <img src="/logo.png" alt="Austofix Logo" className="h-14 w-auto" />
          </div>

          <p className="text-accent font-bold text-[13.5px] mb-3">
            Subscribe to Our Newsletter
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 min-w-0 border border-gray-300 border-r-0 rounded-l px-3 py-2.5 text-[12.5px] text-neutral-700 outline-none bg-white"
            />
            <button
              type="submit"
              className="bg-accent text-white font-semibold text-[12.5px] px-3.5 py-2.5 rounded-r border-none cursor-pointer whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="text-neutral-900 font-bold text-[14px] mb-4">Quick Links</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-neutral-500 text-[13px] no-underline hover:text-accent transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Visiting Address */}
        <div>
          <h3 className="text-neutral-900 font-bold text-[14px] mb-4">Visiting Address</h3>
          <address className="not-italic text-neutral-500 text-[13px] leading-loose">
            28 Dalgleish Street Thebarton<br />
            SA 5031 Australia<br />
            Phone: 1300 727 075<br />
            Fax: (+61) 08 8 351 08 55<br />
            E-Mail:{" "}
            <a href="mailto:info@austofix.com.au" className="text-neutral-500 no-underline hover:text-accent">
              info@austofix.com.au
            </a>
          </address>
        </div>

        {/* Col 4: Registered Address */}
        <div>
          <h3 className="text-neutral-900 font-bold text-[14px] mb-4">Registered Address</h3>
          <address className="not-italic text-neutral-500 text-[13px] leading-loose">
            18 Kinkaid Avenue North Plympton<br />
            SA 5037 Australia<br />
            Phone: 1300 727 075<br />
            Fax: (+61) 08 8 351 08 55<br />
            E-Mail:{" "}
            <a href="mailto:info@austofix.com.au" className="text-neutral-500 no-underline hover:text-accent">
              info@austofix.com.au
            </a>
          </address>
        </div>

        {/* Col 5: Legal */}
        <div>
          <h3 className="text-neutral-900 font-bold text-[14px] mb-4">Legal</h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            {["Privacy Policy", "Cookie Policy"].map((item) => (
              <li key={item}>
                <a href="#" className="text-neutral-500 text-[13px] no-underline hover:text-accent transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-200 text-center py-5">
        <p className="text-neutral-400 text-[13px] m-0">
          Copyright © 2025 Austofix Australia Pty Ltd
        </p>
      </div>

    </footer>
  );
}
