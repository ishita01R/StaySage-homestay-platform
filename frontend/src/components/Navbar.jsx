import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/staysage-logo.png";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const NAVBAR_OFFSET = 110;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const pendingScroll = sessionStorage.getItem("pendingScroll");

    if (location.pathname === "/" && pendingScroll) {
      sessionStorage.removeItem("pendingScroll");

      setTimeout(() => {
        scrollWithOffset(pendingScroll);
      }, 350);
    }
  }, [location.pathname]);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const scrollWithOffset = (sectionId, attempt = 0) => {
    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      if (attempt < 15) {
        setTimeout(() => {
          scrollWithOffset(sectionId, attempt + 1);
        }, 100);
      }
      return;
    }

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  const goToSection = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      sessionStorage.setItem("pendingScroll", sectionId);
      navigate("/");
    } else {
      scrollWithOffset(sectionId);
    }
  };

  const goToAbout = () => {
    setMenuOpen(false);
    navigate("/about");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#eadcc7] bg-[#fffaf3]/95 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
      <div className="flex w-full items-center px-6 py-3 md:px-10">
        <button
          type="button"
          onClick={() => goToSection("home")}
          className="flex items-center gap-4"
        >
          <img
            src={logo}
            alt="StaySage Logo"
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          />

          <span className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="text-[#173f2d] dark:text-white">Stay</span>
            <span className="text-[#C89B3C]">Sage</span>
          </span>
        </button>

        <div className="ml-auto hidden items-center gap-10 text-base font-bold text-[#173f2d] dark:text-slate-200 md:flex">
          <button
            type="button"
            onClick={() => goToSection("home")}
            className="transition hover:text-[#C89B3C]"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => goToSection("features")}
            className="transition hover:text-[#C89B3C]"
          >
            Features
          </button>

          <button
            type="button"
            onClick={() => goToSection("how-it-works")}
            className="transition hover:text-[#C89B3C]"
          >
            How It Works
          </button>

          <button
            type="button"
            onClick={goToAbout}
            className="transition hover:text-[#C89B3C]"
          >
            About
          </button>

          <button
  type="button"
  onClick={() => {
    setMenuOpen(false);
    scrollWithOffset("contact");
  }}
  className="text-left"
>
  Contact
</button>
        </div>

        <div className="ml-12 hidden items-center gap-4 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[#eadcc7] px-5 py-2.5 text-base font-semibold text-[#173f2d] transition hover:bg-[#fff3df] dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          <Link
            to="/login"
            className="rounded-full px-5 py-2.5 text-base font-semibold text-[#173f2d] transition hover:bg-[#fff3df] dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Login
          </Link>

          <Link
            to="/login"
            className="rounded-full bg-[#173f2d] px-6 py-2.5 text-base font-semibold text-white shadow-md shadow-green-950/20 transition hover:bg-[#0f2f22]"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto rounded-xl border border-[#eadcc7] px-3 py-2 text-[#173f2d] dark:border-slate-700 dark:text-white md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#eadcc7] bg-[#fffaf3] px-6 py-5 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4 text-base font-semibold text-[#173f2d] dark:text-slate-200">
            <button
              type="button"
              onClick={() => goToSection("home")}
              className="text-left"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => goToSection("features")}
              className="text-left"
            >
              Features
            </button>

            <button
              type="button"
              onClick={() => goToSection("how-it-works")}
              className="text-left"
            >
              How It Works
            </button>

            <button type="button" onClick={goToAbout} className="text-left">
              About
            </button>

            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="text-left"
            >
              Contact
            </button>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full border border-[#eadcc7] px-4 py-2 text-base font-semibold dark:border-slate-700"
              >
                {darkMode ? "☀ Light" : "🌙 Dark"}
              </button>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-[#eadcc7] px-4 py-2 text-center text-base font-semibold dark:border-slate-700"
              >
                Login
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[#173f2d] px-4 py-2 text-center text-base font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;