import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import reviewRating from "../assets/review-rating.png";

const values = [
  {
    title: "Understand guest reviews",
    description:
      "StaySage helps hotel teams quickly understand what guests are saying by checking feedback, sentiment, and repeated service issues.",
  },
  {
    title: "Turn complaints into tasks",
    description:
      "Managers can convert review problems or QR requests into staff tasks with room number, priority, and status.",
  },
  {
    title: "Improve guest satisfaction",
    description:
      "By tracking every issue properly, hotels can respond faster and create a better experience for guests.",
  },
];

const focusAreas = [
  {
    title: "AI Review Analyzer",
    text: "Helps understand guest feedback and repeated service problems.",
  },
  {
    title: "QR Guest Requests",
    text: "Lets guests report issues easily without calling reception.",
  },
  {
    title: "Staff Task Tracking",
    text: "Helps managers assign work and track completion clearly.",
  },
];

function About() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-slate-900 dark:text-white">
      <div className="fixed inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
          alt="Homely hotel background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-[#fff7ed]/88 backdrop-blur-[2px] dark:bg-slate-950/90" />

      <Navbar />

      <main>
        <section className="px-6 pb-20 pt-36">
          <div className="mx-auto grid max-w-[90rem] items-center gap-16 rounded-[3rem] border border-white/70 bg-white/85 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:grid-cols-2 md:p-14">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-[#C89B3C]/40 bg-white/80 px-6 py-3 text-base font-extrabold text-[#173f2d] shadow-sm dark:bg-white/10 dark:text-[#C89B3C]">
                About StaySage
              </p>

              <h1 className="font-heading mb-8 text-5xl font-extrabold leading-tight text-[#173f2d] dark:text-white md:text-7xl">
                Helping small hotels turn feedback into action.
              </h1>

              <p className="mb-8 max-w-2xl text-xl leading-10 text-slate-700 dark:text-slate-300">
                StaySage is an AI-assisted hospitality platform created for
                homestays, boutique hotels, guest houses, and small resorts. It
                helps hotel teams understand guest reviews, manage service
                requests, and track staff tasks from one simple dashboard.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/dashboard"
                  className="rounded-full bg-[#173f2d] px-10 py-4 text-center text-lg font-extrabold text-white shadow-xl shadow-green-950/20 transition hover:-translate-y-1 hover:bg-[#0f2f22]"
                >
                  Try Demo
                </Link>

                <Link
                  to="/"
                  className="rounded-full border border-[#C89B3C]/50 bg-white/85 px-10 py-4 text-center text-lg font-extrabold text-[#173f2d] shadow-sm transition hover:-translate-y-1 hover:bg-white dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/80 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-white/10">
              <img
  src={reviewRating}
  alt="Guest review rating"
  className="h-[520px] w-full rounded-[2rem] object-cover"
/>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/70 bg-white/85 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:p-14">
            <div className="mb-14 max-w-4xl">
              <p className="mb-4 text-base font-extrabold uppercase tracking-widest text-[#C89B3C]">
                Why StaySage
              </p>

              <h2 className="font-heading text-5xl font-extrabold leading-tight text-[#173f2d] dark:text-white md:text-7xl">
                Built for real problems faced by homestays and small hotels.
              </h2>

              <p className="mt-7 text-xl leading-10 text-slate-700 dark:text-slate-300">
                Small hospitality teams often handle reviews, guest requests,
                and staff work manually. StaySage brings these workflows into
                one simple system so important issues are not missed.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[2.5rem] border border-[#f3dec3] bg-[#fff8ef] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-950"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C89B3C]/20 text-2xl font-extrabold text-[#173f2d] dark:text-[#C89B3C]">
                    ✓
                  </div>

                  <h3 className="mb-4 text-2xl font-extrabold text-[#173f2d] dark:text-white">
                    {value.title}
                  </h3>

                  <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/70 bg-white/85 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:p-14">
            <div className="mb-12 text-center">
              <p className="mb-4 text-base font-extrabold uppercase tracking-widest text-[#C89B3C]">
                What StaySage Improves
              </p>

              <h2 className="font-heading mx-auto max-w-4xl text-5xl font-extrabold leading-tight text-[#173f2d] dark:text-white md:text-7xl">
                Better reviews, clearer tasks, and faster guest support.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2.5rem] bg-[#fff4e6] p-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-950"
                >
                  <h3 className="mb-4 text-2xl font-extrabold text-[#173f2d] dark:text-[#C89B3C]">
                    {item.title}
                  </h3>

                  <p className="text-lg font-semibold leading-8 text-slate-700 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;