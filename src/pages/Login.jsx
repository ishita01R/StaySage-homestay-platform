import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "30px" }}>
        <h1>Login</h1>
        <p>
          Login to access your StaySage account and manage your homestay.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default Login;