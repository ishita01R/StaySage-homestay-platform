import logo from "../assets/staysage-logo.png";

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[#eadcc7] bg-[#fffaf3]/95 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-6 flex items-center gap-4">
            <img
              src={logo}
              alt="StaySage Logo"
              className="h-14 w-14 object-contain"
            />

            <div>
              <h2 className="font-heading text-4xl font-extrabold tracking-tight">
                <span className="text-[#173f2d] dark:text-white">Stay</span>
                <span className="text-[#C89B3C]">Sage</span>
              </h2>

              <p className="mt-1 text-base font-semibold text-slate-600 dark:text-slate-400">
                Smart Solutions for Modern Homestays
              </p>
            </div>
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            StaySage helps homestays and small hotels analyse guest reviews,
            manage QR-based guest requests, and turn complaints into trackable
            staff tasks.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-base font-extrabold uppercase tracking-wider text-[#173f2d] dark:text-white">
            Product
          </h3>

          <ul className="space-y-3 text-base text-slate-700 dark:text-slate-400">
            <li>AI Review Analyzer</li>
            <li>QR Guest Requests</li>
            <li>Task Manager</li>
            <li>Manager Dashboard</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-base font-extrabold uppercase tracking-wider text-[#173f2d] dark:text-white">
            Built For
          </h3>

          <ul className="space-y-3 text-base text-slate-700 dark:text-slate-400">
            <li>Homestays</li>
            <li>Small Hotels</li>
            <li>Boutique Resorts</li>
            <li>Guest Houses</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#eadcc7] px-6 py-6 text-center text-base font-semibold text-slate-600 dark:border-slate-800 dark:text-slate-500">
        © 2026 StaySage. From Reviews to Real Action.
      </div>
    </footer>
  );
}

export default Footer;