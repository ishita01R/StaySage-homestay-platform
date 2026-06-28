import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import reviewRating from "../assets/review-rating.png";

const features = [
  {
    icon: "review",
    title: "AI Review Analyzer",
    description:
      "Understand guest reviews faster with sentiment detection, theme tagging, and suggested management replies.",
  },
  {
    icon: "qr",
    title: "QR Guest Requests",
    description:
      "Guests can scan a room QR code and submit service requests without calling reception or creating an account.",
  },
  {
    icon: "task",
    title: "Smart Task Manager",
    description:
      "Convert complaints into trackable staff tasks with priority, room number, department, and status.",
  },
  {
    icon: "dashboard",
    title: "Manager Dashboard",
    description:
      "View review insights, pending tasks, urgent issues, completed work, and repeated service problems.",
  },
];

const steps = [
  "Guest shares a review or service request",
  "StaySage identifies the issue and category",
  "Manager creates or assigns a task",
  "Staff updates the progress",
  "Hotel improves guest experience",
];

function FeatureIcon({ type }) {
  const iconClass = "h-9 w-9 text-[#173f2d] dark:text-[#C89B3C]";

  if (type === "review") {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7A2.5 2.5 0 0 1 17.5 15H9l-5 4v-13.5Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 10h5" />
      </svg>
    );
  }

  if (type === "qr") {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4h6v6H4V4ZM14 4h6v6h-6V4ZM4 14h6v6H4v-6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 14h2.5M19 14h1M14 17h6M14 20h2M19 20h1"
        />
      </svg>
    );
  }

  if (type === "task") {
    return (
      <svg
        className={iconClass}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h11M8 12h11M8 18h11" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2"
        />
      </svg>
    );
  }

  return (
    <svg
      className={iconClass}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5M4 19h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16v-5M12 16V8M16 16v-8" />
    </svg>
  );
}

function Home() {
  const scrollToFeatures = () => {
    const section = document.getElementById("features");

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - 110;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden text-slate-100 dark:text-white">
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
        <section id="home" className="relative scroll-mt-28 pt-20">
          <div className="mx-auto grid max-w-[90rem] items-center gap-20 px-6 py-20 sm:px-10 lg:px-20 md:grid-cols-2">
            <div>
              <p className="mb-8 inline-flex rounded-full border border-[#C89B3C]/40 bg-white/80 px-6 py-3 text-base font-extrabold text-[#173f2d] shadow-sm backdrop-blur-md dark:border-[#C89B3C]/50 dark:bg-white/10 dark:text-[#C89B3C]">
                AI-powered hospitality operations
              </p>

              <h1 className="font-heading mb-8 text-6xl font-extrabold leading-[1.05] text-[#173f2d] dark:text-white md:text-8xl">
                Turn Guest Feedback Into Better Hospitality
              </h1>

              <p className="mb-10 max-w-2xl text-2xl leading-10 text-slate-700 dark:text-slate-300">
                StaySage helps homestays and small hotels analyse guest reviews,
                manage QR-based service requests, and convert complaints into
                trackable staff tasks.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/dashboard"
                  className="rounded-full bg-[#173f2d] px-10 py-4 text-center text-lg font-extrabold text-white shadow-xl shadow-green-950/20 transition hover:-translate-y-1 hover:bg-[#0f2f22]"
                >
                  Try Demo
                </Link>

                <button
                  type="button"
                  onClick={scrollToFeatures}
                  className="rounded-full border border-[#C89B3C]/50 bg-white/85 px-10 py-4 text-center text-lg font-extrabold text-[#173f2d] shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                >
                  Explore Features
                </button>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/80 bg-white/80 p-5 shadow-2xl backdrop-blur-xl dark:border-white/20 dark:bg-white/20">
              <div className="overflow-hidden rounded-[2rem] bg-white text-slate-900 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1400&q=80"
                  alt="Hotel dashboard preview"
                  className="h-80 w-full object-cover"
                />

                <div className="p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-extrabold text-[#173f2d]">
                        Today's Overview
                      </h3>
                      <p className="mt-2 text-base font-medium text-slate-500">
                        Review insights and staff tasks
                      </p>
                    </div>

                    <span className="rounded-full bg-[#C89B3C]/20 px-5 py-2 text-sm font-extrabold text-[#9f7728]">
                      Live
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    {[
                      ["120+", "Reviews Analysed"],
                      ["18", "Negative Reviews"],
                      ["07", "Pending Tasks"],
                      ["42", "Completed Tasks"],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-3xl bg-[#fff4e6] p-6">
                        <p className="text-4xl font-extrabold text-[#173f2d]">
                          {value}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-slate-500">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-28">
          <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/70 bg-white/85 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/85 md:p-14">
            <div className="grid items-center gap-14 md:grid-cols-2">
              <div>
                <p className="mb-4 text-base font-extrabold uppercase tracking-widest text-[#C89B3C]">
                  The Problem
                </p>

                <h2 className="font-heading text-5xl font-extrabold leading-tight text-[#173f2d] dark:text-white md:text-7xl">
                  Small hotels lose guest trust when issues are missed.
                </h2>

                <p className="mt-7 text-xl leading-10 text-slate-700 dark:text-slate-300">
                  Many homestays still manage reviews, complaints, and staff work
                  manually. This makes it easy to miss guest issues, delay
                  service, and repeat the same mistakes.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  "Manual review checking",
                  "Missed guest complaints",
                  "No proper task tracking",
                  "Repeated room issues",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[2rem] border border-[#f3dec3] bg-[#fff8ef] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
                  >
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C89B3C]/15 text-lg font-extrabold text-[#173f2d] dark:bg-white/10 dark:text-[#C89B3C]">
                      0{index + 1}
                    </div>

                    <h3 className="text-xl font-extrabold text-[#173f2d] dark:text-white">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-28 px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 rounded-[3rem] border border-white/70 bg-white/85 p-10 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/85">
              <p className="mb-4 text-base font-extrabold uppercase tracking-widest text-[#C89B3C]">
                Features
              </p>

              <h2 className="font-heading max-w-4xl text-5xl font-extrabold leading-tight text-[#173f2d] dark:text-white md:text-7xl">
                Built to help hotel teams act faster.
              </h2>

              <p className="mt-7 max-w-4xl text-xl leading-10 text-slate-700 dark:text-slate-300">
                StaySage connects guest feedback, service requests, and staff
                tasks into one simple platform for small hospitality teams.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-[2.5rem] border border-white/70 bg-white/90 p-10 shadow-xl backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/90"
                >
                  <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#fff4e6] shadow-sm dark:bg-slate-950">
                    <FeatureIcon type={feature.icon} />
                  </div>

                  <h3 className="mb-4 text-3xl font-extrabold text-[#173f2d] dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="text-lg leading-9 text-slate-700 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-28 px-6 py-28">
          <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/70 bg-[#f7efe5]/90 p-10 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:p-14">
            <div className="mb-16 max-w-4xl">
              <p className="mb-4 text-base font-extrabold uppercase tracking-widest text-[#C89B3C]">
                How It Works
              </p>

              <h2 className="font-heading text-5xl font-extrabold leading-tight text-[#173f2d] dark:text-white md:text-7xl">
                From reviews to real action.
              </h2>

              <p className="mt-7 text-xl leading-10 text-slate-700 dark:text-slate-300">
                StaySage helps hotel teams understand problems, assign tasks,
                and improve guest experience with a clear workflow.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[2rem] border border-white/70 bg-white/90 p-8 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#173f2d] text-lg font-extrabold text-white">
                    {index + 1}
                  </div>

                  <p className="text-lg font-bold leading-8 text-slate-800 dark:text-slate-200">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 rounded-[3rem] border border-white/70 bg-white/85 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:grid-cols-2 md:p-14">
            <div>
              <p className="mb-4 text-base font-extrabold uppercase tracking-widest text-[#C89B3C]">
                QR Guest Requests
              </p>

              <h2 className="font-heading mb-7 text-5xl font-extrabold leading-tight text-[#173f2d] dark:text-white md:text-7xl">
                Let guests report issues without calling reception.
              </h2>

              <p className="mb-8 text-xl leading-10 text-slate-700 dark:text-slate-300">
                Guests can scan a QR code placed inside the room and submit
                requests like cleaning, towels, food, hot water, or maintenance.
                The request directly becomes a task for the hotel team.
              </p>

              <div className="rounded-[2rem] bg-[#fff4e6] p-8 shadow-sm dark:bg-slate-950">
                <p className="mb-4 text-lg font-extrabold text-[#173f2d] dark:text-white">
                  Example guest request
                </p>

                <p className="rounded-3xl bg-white p-6 text-lg font-medium text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-300">
                  Hot water is not coming in Room 204.
                </p>

                <p className="mt-5 text-base font-extrabold text-[#173f2d] dark:text-[#C89B3C]">
                  Created task: Maintenance · High Priority · Room 204
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#fff4e6] p-5 shadow-xl dark:bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                alt="Guest using phone"
                className="h-[560px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 rounded-[3rem] border border-white/70 bg-white/85 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:grid-cols-2 md:p-14">
            <div className="rounded-[2rem] bg-[#fff4e6] p-5 shadow-xl dark:bg-slate-950">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80"
                alt="Homely hotel room"
                className="h-[560px] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div>
              <p className="mb-4 text-base font-extrabold uppercase tracking-widest text-[#C89B3C]">
                About StaySage
              </p>

              <h2 className="font-heading mb-7 text-5xl font-extrabold leading-tight text-[#173f2d] dark:text-white md:text-7xl">
                Built for homestays, boutique hotels, and small resorts.
              </h2>

              <p className="mb-6 text-xl leading-10 text-slate-700 dark:text-slate-300">
                StaySage is designed for hotel owners and managers who want a
                simple way to understand guest feedback and improve service
                quality.
              </p>

              <p className="text-xl leading-10 text-slate-700 dark:text-slate-300">
                It combines AI review analysis with task management so
                complaints do not remain only as feedback. They become action.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-28">
          <div className="mx-auto max-w-6xl rounded-[3rem] bg-gradient-to-r from-[#173f2d] via-[#1f5a40] to-[#C89B3C] px-10 py-24 text-center text-white shadow-2xl">
            <h2 className="font-heading mb-7 text-5xl font-extrabold leading-tight md:text-7xl">
              Ready to improve your guest experience?
            </h2>

            <p className="mx-auto mb-10 max-w-3xl text-2xl leading-10 text-green-50">
              Start using StaySage to analyse reviews, handle guest requests,
              and manage hotel tasks from one simple dashboard.
            </p>

            <Link
              to="/dashboard"
              className="inline-flex rounded-full bg-white px-12 py-4 text-xl font-extrabold text-[#173f2d] transition hover:-translate-y-1 hover:bg-[#fff4e6]"
            >
              Try Demo
            </Link>
          </div>
        </section>
      </main>

      <div id="contact" className="scroll-mt-28">
        <Footer />
      </div>
    </div>
  );
}

export default Home;