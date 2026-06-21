import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

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

  return (
    <nav className="bg-green-900 dark:bg-black text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h2 className="text-2xl font-bold">StaySage</h2>

      <div className="flex flex-wrap gap-4 text-sm md:text-base items-center">
        <Link to="/" className="hover:text-green-200">Home</Link>
        <Link to="/about" className="hover:text-green-200">About</Link>
        <Link to="/dashboard" className="hover:text-green-200">Dashboard</Link>
        <Link to="/login" className="hover:text-green-200">Login</Link>
        <Link to="/components" className="hover:text-green-200">Components</Link>

        <button
          onClick={toggleTheme}
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;