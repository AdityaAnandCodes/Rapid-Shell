import { useState, useEffect } from "react";
import { NavLinks } from "../constants";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(NavLinks[0]); // Default active link

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = activeLink;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
          currentSection = section.id;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  return (
    <header className="w-full flex px-5 py-3 max-sm:px-8 justify-between items-center">
      <nav className="flex w-full justify-center max-sm:justify-between">
        <div className=" max-sm:px-1 flex flex-cols">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 max-sm:size-7"
          >
            <path
              fillRule="evenodd"
              d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="py-1 px-2 center max-sm:text-sm max-sm:py-0.5">Rapid Shell</p>
        </div>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {NavLinks.map((nav) => (
            <div
              key={nav}
              className={`text-gray-400 text-sm px-5 cursor-pointer hover:text-white transition-all ${
                activeLink === nav ? "active text-white" : ""
              }`}
              onClick={() => {
                document.getElementById(nav)?.scrollIntoView({ behavior: "smooth" });
                setActiveLink(nav);
              }}
            >
              {nav}
            </div>
          ))}
        </div>
        <button className="bg-slate-50 text-zinc-950 outline outline-white outline-offset-2 px-4 py-2 rounded hover:bg-green-400 hover:text-white transition-all max-sm:px-1 max-sm:py-1 max-sm:text-xs">
          Download
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
