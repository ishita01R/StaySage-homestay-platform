import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "30px" }}>
        <h1>About StaySage</h1>
        <p>
          StaySage is a smart homestay platform that helps owners manage their
          services and understand guest feedback.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default About;