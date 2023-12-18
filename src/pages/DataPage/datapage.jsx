import InputForm from "../../components/InputForm/inputform"
import Logo from "../../components/Logo/logo"
import Footer from "../../components/Footer/footer"
import { MdSettings } from "react-icons/md"
import Carousel from "../../components/Carousel/carousel"
import "./datapage.css"
import "../ResultPage/resultpage.css"
import wordcloud from "../../assets/images/word_cloud.png"
import piechart from "../../assets/images/pie-chart-example-1.png"
import bargraph from "../../assets/images/matplotlib_bar_plot.jpg"
import setopati from "../../assets/images/setopati.png"

const DataPage = () => {

  const newsList= [
    {
      media : "setopati",
      heading: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", 
      link: "www.google.com",
      date: "2080/11/12"
    },
    {
      media : "setopati",
      heading: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", 
      link: "www.google.com",
      date: "2080/11/12"
    },
    {
      media : "setopati",
      heading: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", 
      link: "www.google.com",
      date: "2080/11/12"
    },
    {
      media : "setopati",
      heading: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", 
      link: "www.google.com",
      date: "2080/11/12"
    },
    {
      media : "setopati",
      heading: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.", 
      link: "www.google.com",
      date: "2080/11/12"
    },
  ];

  return (
    <div className="DataPage">
      <header className="heading">
        <div className="heading_items">
          <Logo />
          <InputForm />
          <MdSettings className="setting_logo" />
        </div>
      </header>
      <section className="main_result">
        <div className="news-container">
          {
            newsList.map((news, index)=>(
              <div className="news-card">
                <div className="image-container">
                  <img src={setopati} alt="media image" className="media-logo" />
                </div>
                <div className="meta-info">
                  <div>{news.date}</div>
                  <div>{news.media}</div>
                </div>
                <div className="news-heading">
                  <div className="">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</div>
                </div>
              </div>
               
            ))
          }
        </div>
      </section>
      <div className="footer-resultpage">
        <Footer/>
      </div>
   </div>
  )
}

export default DataPage;
