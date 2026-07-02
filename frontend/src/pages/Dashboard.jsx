import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_BASE_URL = "http://localhost:5000";

const activities = [
  "New review analysed from Room 204",
  "Hot water issue marked as high priority",
  "Housekeeping task assigned for Room 106",
  "Room 301 food request completed",
];

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [guestRequests, setGuestRequests] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
  const [taskCreated, setTaskCreated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError("");

      const [statsRes, reviewsRes, requestsRes, tasksRes] = await Promise.all([
        fetch(`${API_BASE_URL}/api/stats`),
        fetch(`${API_BASE_URL}/api/reviews`),
        fetch(`${API_BASE_URL}/api/requests`),
        fetch(`${API_BASE_URL}/api/tasks`),
      ]);

      if (!statsRes.ok || !reviewsRes.ok || !requestsRes.ok || !tasksRes.ok) {
        throw new Error("Failed to fetch dashboard data");
      }

      const statsData = await statsRes.json();
      const reviewsData = await reviewsRes.json();
      const requestsData = await requestsRes.json();
      const tasksData = await tasksRes.json();

      setStats(statsData.data);
      setReviews(reviewsData.data);
      setGuestRequests(requestsData.data);
      setTasks(tasksData.data);
      setSelectedReview(reviewsData.data[0]);
    } catch (err) {
      setError("Backend connection failed. Please check if server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const getPriorityStyle = (priority) => {
    if (priority === "High") {
      return "bg-red-100 text-red-700";
    }

    if (priority === "Medium") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-green-100 text-green-700";
  };

  const getStatusStyle = (status) => {
    if (status === "Completed") {
      return "bg-green-100 text-green-700";
    }

    if (status === "In Progress") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-orange-100 text-orange-700";
  };

  const statCards = [
    {
      label: "Reviews Analysed",
      value: stats?.totalReviews || 0,
      note: "From backend API",
    },
    {
      label: "Negative Reviews",
      value: stats?.negativeReviews || 0,
      note: "Need attention",
    },
    {
      label: "Pending Tasks",
      value: stats?.pendingTasks || 0,
      note: "Staff action needed",
    },
    {
      label: "Completed Tasks",
      value: stats?.completedTasks || 0,
      note: "Resolved issues",
    },
  ];

  if (loading) {
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

        <main className="flex min-h-screen items-center justify-center px-6 pt-28">
          <div className="rounded-[2rem] border border-white/70 bg-white/90 p-10 text-center shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90">
            <div className="mx-auto mb-6 h-14 w-14 animate-spin rounded-full border-4 border-[#C89B3C] border-t-transparent"></div>

            <h2 className="text-3xl font-extrabold text-[#173f2d] dark:text-white">
              Loading StaySage dashboard...
            </h2>

            <p className="mt-3 text-lg font-semibold text-slate-600 dark:text-slate-300">
              Fetching live data from backend API.
            </p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
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

        <main className="flex min-h-screen items-center justify-center px-6 pt-28">
          <div className="max-w-2xl rounded-[2rem] border border-red-200 bg-red-50 p-10 text-center shadow-2xl">
            <h2 className="text-3xl font-extrabold text-red-700">
              Backend Connection Error
            </h2>

            <p className="mt-4 text-lg font-semibold text-red-600">{error}</p>

            <button
              type="button"
              onClick={fetchDashboardData}
              className="mt-8 rounded-full bg-[#173f2d] px-8 py-4 text-lg font-extrabold text-white"
            >
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

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

      <main className="px-6 pb-24 pt-36">
        <section className="mx-auto max-w-[90rem]">
          <div className="mb-10 flex flex-col justify-between gap-6 rounded-[3rem] border border-white/70 bg-white/85 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:flex-row md:items-center md:p-10">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[#C89B3C]/40 bg-white/80 px-6 py-3 text-base font-extrabold text-[#173f2d] shadow-sm dark:bg-white/10 dark:text-[#C89B3C]">
                StaySage Demo Dashboard
              </p>

              <h1 className="font-heading text-5xl font-extrabold leading-tight text-[#173f2d] dark:text-white md:text-7xl">
                Hotel manager control panel
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-9 text-slate-700 dark:text-slate-300">
                This demo shows live backend data for guest reviews, QR
                requests, staff tasks, and dashboard statistics.
              </p>
            </div>

            <Link
              to="/"
              className="rounded-full border border-[#C89B3C]/50 bg-white/85 px-8 py-4 text-center text-lg font-extrabold text-[#173f2d] shadow-sm transition hover:-translate-y-1 hover:bg-white dark:border-white/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              Back to Home
            </Link>
          </div>

          <div className="mb-10 grid gap-6 md:grid-cols-4">
            {statCards.map((item) => (
              <div
                key={item.label}
                className="rounded-[2rem] border border-white/70 bg-white/90 p-7 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90"
              >
                <p className="text-5xl font-extrabold text-[#173f2d] dark:text-[#C89B3C]">
                  {item.value}
                </p>

                <h3 className="mt-4 text-xl font-extrabold text-slate-900 dark:text-white">
                  {item.label}
                </h3>

                <p className="mt-2 text-base font-semibold text-slate-500 dark:text-slate-400">
                  {item.note}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="rounded-[3rem] border border-white/70 bg-white/90 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:p-10">
              <div className="mb-8">
                <p className="mb-4 text-base font-extrabold uppercase tracking-widest text-[#C89B3C]">
                  AI Review Analyzer
                </p>

                <h2 className="font-heading text-4xl font-extrabold text-[#173f2d] dark:text-white md:text-5xl">
                  Select a guest review
                </h2>
              </div>

              <div className="mb-8 grid gap-4 md:grid-cols-3">
                {reviews.map((review) => (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => {
                      setSelectedReview(review);
                      setTaskCreated(false);
                    }}
                    className={`rounded-[1.5rem] border p-5 text-left transition hover:-translate-y-1 ${
                      selectedReview?.id === review.id
                        ? "border-[#C89B3C] bg-[#fff4e6]"
                        : "border-[#f3dec3] bg-white dark:border-white/10 dark:bg-slate-950"
                    }`}
                  >
                    <p className="text-lg font-extrabold text-[#173f2d] dark:text-white">
                      {review.guest}
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-500">
                      Room {review.room}
                    </p>
                  </button>
                ))}
              </div>

              {selectedReview && (
                <>
                  <div className="rounded-[2rem] bg-[#fff8ef] p-7 dark:bg-slate-950">
                    <p className="mb-4 text-base font-extrabold text-[#173f2d] dark:text-[#C89B3C]">
                      Guest Review
                    </p>

                    <p className="rounded-3xl bg-white p-6 text-lg font-medium leading-8 text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-300">
                      “{selectedReview.review}”
                    </p>
                  </div>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div className="rounded-[2rem] bg-white p-6 shadow-sm dark:bg-slate-950">
                      <p className="text-sm font-extrabold uppercase tracking-widest text-[#C89B3C]">
                        Sentiment
                      </p>

                      <h3 className="mt-3 text-3xl font-extrabold text-[#173f2d] dark:text-white">
                        {selectedReview.sentiment}
                      </h3>
                    </div>

                    <div className="rounded-[2rem] bg-white p-6 shadow-sm dark:bg-slate-950">
                      <p className="text-sm font-extrabold uppercase tracking-widest text-[#C89B3C]">
                        Issue Found
                      </p>

                      <h3 className="mt-3 text-3xl font-extrabold text-[#173f2d] dark:text-white">
                        {selectedReview.issue}
                      </h3>
                    </div>

                    <div className="rounded-[2rem] bg-white p-6 shadow-sm dark:bg-slate-950">
                      <p className="text-sm font-extrabold uppercase tracking-widest text-[#C89B3C]">
                        Department
                      </p>

                      <h3 className="mt-3 text-3xl font-extrabold text-[#173f2d] dark:text-white">
                        {selectedReview.department}
                      </h3>
                    </div>

                    <div className="rounded-[2rem] bg-white p-6 shadow-sm dark:bg-slate-950">
                      <p className="text-sm font-extrabold uppercase tracking-widest text-[#C89B3C]">
                        Priority
                      </p>

                      <span
                        className={`mt-3 inline-flex rounded-full px-5 py-2 text-base font-extrabold ${getPriorityStyle(
                          selectedReview.priority
                        )}`}
                      >
                        {selectedReview.priority}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 rounded-[2rem] bg-[#173f2d] p-7 text-white shadow-xl">
                    <p className="mb-3 text-base font-extrabold text-[#C89B3C]">
                      Suggested Management Reply
                    </p>

                    <p className="text-lg leading-8 text-green-50">
                      {selectedReview.suggestedReply}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setTaskCreated(true)}
                    className="mt-8 rounded-full bg-[#173f2d] px-10 py-4 text-lg font-extrabold text-white shadow-xl shadow-green-950/20 transition hover:-translate-y-1 hover:bg-[#0f2f22]"
                  >
                    Convert Review Into Task
                  </button>

                  {taskCreated && (
                    <div className="mt-6 rounded-[2rem] border border-green-200 bg-green-50 p-6 text-green-800">
                      <p className="text-lg font-extrabold">
                        Task created successfully
                      </p>

                      <p className="mt-2 text-base font-semibold">
                        {selectedReview.issue} issue assigned to{" "}
                        {selectedReview.department} for Room{" "}
                        {selectedReview.room}.
                      </p>
                    </div>
                  )}
                </>
              )}
            </section>

            <div className="grid gap-10">
              <section className="rounded-[3rem] border border-white/70 bg-white/90 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90">
                <p className="mb-4 text-base font-extrabold uppercase tracking-widest text-[#C89B3C]">
                  QR Guest Requests
                </p>

                <h2 className="font-heading mb-6 text-4xl font-extrabold text-[#173f2d] dark:text-white">
                  Live room requests
                </h2>

                <div className="space-y-4">
                  {guestRequests.map((request) => (
                    <div
                      key={request.id}
                      className="rounded-[1.5rem] bg-[#fff8ef] p-5 dark:bg-slate-950"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-lg font-extrabold text-[#173f2d] dark:text-white">
                          Room {request.room}
                        </p>

                        <span
                          className={`rounded-full px-4 py-1 text-sm font-extrabold ${getPriorityStyle(
                            request.priority
                          )}`}
                        >
                          {request.priority}
                        </span>
                      </div>

                      <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                        {request.request}
                      </p>

                      <p className="mt-2 text-sm font-bold text-slate-500">
                        {request.time}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[3rem] border border-white/70 bg-white/90 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90">
                <p className="mb-4 text-base font-extrabold uppercase tracking-widest text-[#C89B3C]">
                  Recent Activity
                </p>

                <h2 className="font-heading mb-6 text-4xl font-extrabold text-[#173f2d] dark:text-white">
                  What changed today
                </h2>

                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div
                      key={activity}
                      className="flex gap-4 rounded-[1.5rem] bg-[#fff8ef] p-5 dark:bg-slate-950"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#173f2d] text-sm font-extrabold text-white">
                        {index + 1}
                      </div>

                      <p className="text-base font-semibold leading-7 text-slate-700 dark:text-slate-300">
                        {activity}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <section className="mt-10 rounded-[3rem] border border-white/70 bg-white/90 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 md:p-10">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-base font-extrabold uppercase tracking-widest text-[#C89B3C]">
                  Staff Task Manager
                </p>

                <h2 className="font-heading text-4xl font-extrabold text-[#173f2d] dark:text-white md:text-5xl">
                  Complaints converted into action
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                Every review problem or QR request becomes a clear task for the
                right hotel department. This task data is coming from the backend.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {tasks.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[2rem] border border-[#f3dec3] bg-[#fff8ef] p-6 shadow-sm dark:border-white/10 dark:bg-slate-950"
                >
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-extrabold text-[#173f2d] dark:text-white">
                      {item.task}
                    </h3>

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-extrabold ${getStatusStyle(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-widest text-[#C89B3C]">
                        Room
                      </p>

                      <p className="mt-1 text-lg font-bold text-slate-700 dark:text-slate-300">
                        {item.room}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-widest text-[#C89B3C]">
                        Department
                      </p>

                      <p className="mt-1 text-lg font-bold text-slate-700 dark:text-slate-300">
                        {item.department}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-widest text-[#C89B3C]">
                        Priority
                      </p>

                      <span
                        className={`mt-2 inline-flex rounded-full px-4 py-1 text-sm font-extrabold ${getPriorityStyle(
                          item.priority
                        )}`}
                      >
                        {item.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;