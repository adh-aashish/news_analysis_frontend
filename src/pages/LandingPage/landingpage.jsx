import Footer from "../../components/Footer/footer";
import InputForm from "../../components/InputForm/inputform";
import Logo from "../../components/Logo/logo";
import ParticleBackground from "../../components/Particles/particles";
import "./landingpage.css"

function LandingPage() {
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
        <div className='search'>
          <InputForm />
        </div>
      </section>
      <footer className="footer"> 
        <Footer />
      </footer>
      <ParticleBackground />
      {/* <ParticleBackground />*/}
   </div>
  );
}

export default LandingPage 
