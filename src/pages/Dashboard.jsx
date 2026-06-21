import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="min-h-[70vh] bg-green-50 px-10 py-16 text-center">
        <h1 className="text-4xl font-bold text-green-900 mb-6">
          Dashboard
        </h1>

        <p className="text-lg text-gray-700 mb-10">
          View bookings, guest reviews and AI insights from one place.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6 w-64">
            <h3 className="font-bold text-green-900">Total Bookings</h3>
            <p className="text-3xl mt-3">24</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 w-64">
            <h3 className="font-bold text-green-900">Guest Reviews</h3>
            <p className="text-3xl mt-3">48</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 w-64">
            <h3 className="font-bold text-green-900">Positive Reviews</h3>
            <p className="text-3xl mt-3">92%</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;