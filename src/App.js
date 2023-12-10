import Footer from "./components/Footer/footer";
import InputForm from "./components/InputForm/inputform";
import Navbar from "./components/Navbar/navbar";
import ParticleBackground from "./components/Particles/particles";

function App() {
  return (
    <div className="App">
      <header className="heading">
        <Navbar />
      </header>
      <section className="main">
        <InputForm />
      </section>
      <footer className="footer"> 
        <Footer />
      </footer>
      <ParticleBackground />
      {/* <ParticleBackground />*/}
   </div>
  );
}

export default App
