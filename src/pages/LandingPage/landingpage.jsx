import Footer from "../../components/Footer/footer";
import InputForm from "../../components/InputForm/inputform";
import Logo from "../../components/Logo/logo";
import "./landingpage.css";
import ParticleBackground from "../../components/Particles/particles";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <header className="heading">
        <nav className="nav_container">
          <div className="navbar">
            <Logo />
          </div>
        </nav>
      </header>
      <section className="main">
        <div className="search">
          <InputForm />
        </div>
      </section>
      <footer className="footer-landingpage">
        <Footer />
      </footer>
      {/*<ParticleBackground />*/}
      <ParticleBackground />
    </div>
  );
};

export default LandingPage;
