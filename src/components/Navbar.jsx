import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-900 text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h2 className="text-2xl font-bold">StaySage</h2>

      <div className="flex flex-wrap gap-4 text-sm md:text-base">
        <Link to="/" className="hover:text-green-200">Home</Link>
        <Link to="/about" className="hover:text-green-200">About</Link>
        <Link to="/dashboard" className="hover:text-green-200">Dashboard</Link>
        <Link to="/login" className="hover:text-green-200">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;