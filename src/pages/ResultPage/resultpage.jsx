import { useLocation } from "react-router-dom"
import InputForm from "../../components/InputForm/inputform"
import Logo from "../../components/Logo/logo"
import Footer from "../../components/Footer/footer"
import { MdSettings } from "react-icons/md"
import Carousel from "../../components/Carousel/carousel"
import "./resultpage.css"

const ResultPage = () => {
  const location = useLocation();
  const wordclouds = location.state.wordclouds;
  const bargraph = location.state.bargraph;
  const news = location.state.similar_news;

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
        <div className="topic-vis-container">
          <div className="wordcloud-container" key={1}>
            {
              wordclouds.map((wordcloud, index) => (
                <> 
                  <div className="wordcloud" key={index}>
                    <div>
                      <div className="wordcloud-title">
                        {"Topic "+ (index+1) }
                      </div>
                      <img src={"data:image/png;base64,"+ wordcloud[1]} alt="Word cloud of topic" width={515} height={268} />
                    </div>
                  </div>
                </>
              ))

            }
            <div className="wordcloud" key={3}>
              <div>
                <div className="wordcloud-title">
                  Bargraph 
                </div>
                <img src={"data:image/png;base64,"+bargraph} alt="Word cloud of topic" width={515} height={268} />
              </div>
            </div>
          </div>
        </div>
        <div className="news_container">
          <div className='similar_news-heading'><span color="red">S</span>imilar <span color="red">N</span>ews</div>
          <Carousel news={news}></Carousel>
        </div>
      </section>
      <div className="footer-resultpage">
        <Footer/>
      </div>
   </div>
  )
}

export default ResultPage 
