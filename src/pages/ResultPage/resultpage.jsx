import InputForm from "../../components/InputForm/inputform"
import Logo from "../../components/Logo/logo"
import { MdSettings } from "react-icons/md"
import Carousel from "../../components/Carousel/carousel"
import "./resultpage.css"

const ResultPage = () => {
  const news= [
    { media: "setopati", heading:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", link:"www.google.com", date: "2080/11/12" },
    { media: "setopati", heading:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", link:"www.google.com", date: "2080/11/12" },
    { media: "setopati", heading:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", link:"www.google.com", date: "2080/11/12" },
    { media: "setopati", heading:"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", link:"www.google.com", date: "2080/11/12" },
  ];

  return (
    <div className="ResultPage">
      <header className="heading">
        <div className="heading_items">
          <Logo />
          <InputForm />
          <MdSettings className="setting_logo" />
        </div>
      </header>
      <section className="main_result">
        <div className="vis-container"></div>
        <div className="news_container">
          <Carousel news={news}></Carousel>
        </div>
      </section>
   </div>
  )
}

export default ResultPage 
