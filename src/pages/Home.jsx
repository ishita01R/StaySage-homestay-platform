import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="flex flex-wrap justify-center gap-8 py-20 px-6 bg-gray-100 dark:bg-gray-950">
        <Card
          title="AI Review Analysis"
          description="Analyze guest reviews using AI and understand customer feedback."
        />

        <Card
          title="Booking Management"
          description="Manage bookings and improve guest experience."
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;