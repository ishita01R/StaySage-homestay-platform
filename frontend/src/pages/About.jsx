import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import reviewRating from "../assets/review-rating.png";

const values = [
  {
    title: "Understand guest reviews",
    description:
      "StaySage helps hotel teams quickly understand guest feedback by checking sentiment, repeated issues, and service complaints.",
  },
  {
    title: "Turn complaints into tasks",
    description:
      "Managers can convert review problems or QR requests into clear staff tasks with room number, priority, and status.",
  },
  {
    title: "Improve guest satisfaction",
    description:
      "By tracking every issue properly, hotels can respond faster and create a better guest experience.",
  },
];

const focusAreas = [
  {
    title: "AI Review Analyzer",
    text: "Understands guest feedback and highlights repeated service problems.",
  },
  {
    title: "QR Guest Requests",
    text: "Lets guests report issues easily without calling the reception.",
  },
  {
    title: "Staff Task Tracking",
    text: "Helps managers assign tasks and track completion clearly.",
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
        <section className="px-6 pb-10 pt-24">
          <div className="mx-auto grid max-w-[70rem] items-center gap-7 rounded-[1.7rem] border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:min-h-[calc(100vh-9rem)] md:grid-cols-[1fr_1fr] md:p-7">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-[#C89B3C]/40 bg-white/85 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#173f2d] shadow-sm dark:bg-white/10 dark:text-[#C89B3C]">
                About StaySage
              </p>

              <h1 className="font-heading mb-4 max-w-xl text-3xl font-extrabold leading-[1.1] text-[#173f2d] dark:text-white md:text-4xl lg:text-5xl">
                Helping small hotels turn feedback into action.
              </h1>

              <p className="mb-5 max-w-lg text-sm leading-7 text-slate-700 dark:text-slate-300 md:text-base">
                StaySage is an AI-assisted hospitality platform built for
                homestays, boutique hotels, guest houses, and small resorts. It
                helps teams understand guest reviews, manage service requests,
                and track staff tasks from one simple dashboard.
              </p>

              <div className="mb-5 grid max-w-lg gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-[#fff4e6] p-3 shadow-sm dark:bg-slate-950">
                  <p className="text-xl font-extrabold text-[#173f2d] dark:text-[#C89B3C]">
                    120+
                  </p>
                  <p className="mt-1 text-[11px] font-bold leading-4 text-slate-600 dark:text-slate-300">
                    Reviews analysed
                  </p>
                </div>

                <div className="rounded-xl bg-[#fff4e6] p-3 shadow-sm dark:bg-slate-950">
                  <p className="text-xl font-extrabold text-[#173f2d] dark:text-[#C89B3C]">
                    07
                  </p>
                  <p className="mt-1 text-[11px] font-bold leading-4 text-slate-600 dark:text-slate-300">
                    Pending tasks
                  </p>
                </div>

                <div className="rounded-xl bg-[#fff4e6] p-3 shadow-sm dark:bg-slate-950">
                  <p className="text-xl font-extrabold text-[#173f2d] dark:text-[#C89B3C]">
                    42
                  </p>
                  <p className="mt-1 text-[11px] font-bold leading-4 text-slate-600 dark:text-slate-300">
                    Issues resolved
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/dashboard"
                  className="rounded-full bg-[#173f2d] px-6 py-2.5 text-center text-sm font-extrabold text-white shadow-xl shadow-green-950/20 transition hover:-translate-y-1 hover:bg-[#0f2f22]"
                >
                  Try Demo
                </Link>

                <Link
                  to="/"
                  className="rounded-full border border-[#C89B3C]/50 bg-white/85 px-6 py-2.5 text-center text-sm font-extrabold text-[#173f2d] shadow-sm transition hover:-translate-y-1 hover:bg-white dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                >
                  Back to Home
                </Link>
              </div>
            </div>

            <div className="relative rounded-[1.5rem] border border-white/80 bg-white/85 p-3 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-white/10">
              <div className="relative overflow-hidden rounded-[1.2rem]">
                <img
                  src={reviewRating}
                  alt="Guest review rating"
                  className="h-[230px] w-full object-cover md:h-[290px] lg:h-[320px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#173f2d]/85 via-[#173f2d]/20 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-[#173f2d] shadow-lg backdrop-blur-md">
                  Live insight
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-[1rem] bg-white/94 p-4 shadow-xl backdrop-blur-md dark:bg-slate-950/90">
                  <p className="mb-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#C89B3C]">
                    Guest feedback insight
                  </p>

                  <h3 className="text-lg font-extrabold text-[#173f2d] dark:text-white md:text-xl">
                    Cleanliness issue detected
                  </h3>

                  <p className="mt-1.5 text-xs font-semibold leading-5 text-slate-600 dark:text-slate-300">
                    StaySage identifies important guest issues and helps
                    managers create action tasks faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-10">
          <div className="mx-auto max-w-6xl rounded-[1.7rem] border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:p-8">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#C89B3C]">
                Why StaySage
              </p>

              <h2 className="font-heading text-2xl font-extrabold leading-tight text-[#173f2d] dark:text-white md:text-4xl">
                Built for real problems faced by homestays and small hotels.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 dark:text-slate-300 md:text-base">
                Small hospitality teams often handle reviews, guest requests,
                and staff work manually. StaySage brings these workflows into
                one simple system so important issues are not missed.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[1.4rem] border border-[#f3dec3] bg-[#fff8ef] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-950"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#C89B3C]/20 text-base font-extrabold text-[#173f2d] dark:text-[#C89B3C]">
                    ✓
                  </div>

                  <h3 className="mb-2 text-lg font-extrabold text-[#173f2d] dark:text-white">
                    {value.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-10">
          <div className="mx-auto max-w-6xl rounded-[1.7rem] border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:p-8">
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-[#C89B3C]">
                What StaySage Improves
              </p>

              <h2 className="font-heading mx-auto max-w-3xl text-2xl font-extrabold leading-tight text-[#173f2d] dark:text-white md:text-4xl">
                Better reviews, clearer tasks, and faster guest support.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.4rem] bg-[#fff4e6] p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-950"
                >
                  <h3 className="mb-2 text-lg font-extrabold text-[#173f2d] dark:text-[#C89B3C]">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-10">
          <div className="mx-auto max-w-5xl rounded-[1.7rem] bg-gradient-to-r from-[#173f2d] via-[#1f5a40] to-[#C89B3C] px-6 py-10 text-center text-white shadow-2xl md:px-8">
            <h2 className="font-heading mb-4 text-2xl font-extrabold leading-tight md:text-4xl">
              From feedback to better hospitality.
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-green-50 md:text-base">
              StaySage helps small hospitality teams act faster, reduce repeated
              complaints, and create a smoother guest experience.
            </p>

            <Link
              to="/dashboard"
              className="inline-flex rounded-full bg-white px-7 py-2.5 text-sm font-extrabold text-[#173f2d] transition hover:-translate-y-1 hover:bg-[#fff4e6]"
            >
              Explore Demo
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;