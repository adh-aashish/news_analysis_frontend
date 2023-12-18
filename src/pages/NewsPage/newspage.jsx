import InputForm from "../../components/InputForm/inputform"
import Logo from "../../components/Logo/logo"
import Footer from "../../components/Footer/footer"
import { MdSettings } from "react-icons/md"
// import Carousel from "../../components/Carousel/carousel"
import "./newspage.css"
import "../ResultPage/resultpage.css"

const NewsPage = () => {

  const wordclouds = [1,2,3,4]
  return (
    <div className="NewsPage">
      <header className="heading">
        <div className="heading_items">
          <Logo />
          <InputForm />
          <MdSettings className="setting_logo" />
        </div>
      </header>
      <section className="main_result">
        <div className="topic-vis-container">
        </div>
      </section>
      <div className="footer-resultpage">
        <Footer/>
      </div>
   </div>
  )
}

export default NewsPage;
