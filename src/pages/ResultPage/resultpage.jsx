import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Carousel from "../../components/Carousel/carousel";
import "./resultpage.css";
import { GridImage } from "../../components/GridImage/imageGrid";
import { RelatedNews } from "../TopicAnalysisPage/sections/RelatedNews/relatedNews";

const ResultPage = () => {
  const location = useLocation();
  const wordclouds = location.state.wordclouds;
  const bargraph = location.state.bargraph;
  const similar_news = location.state.similar_news;
  var news = [];
  for (let i = 0; i < news.length; i++) {
    news.push({});
  }

  const imageGridList = [];

  wordclouds.forEach(function (wordcloud) {
    const new_image_data = {
      title: "Topic ID: " + wordcloud[3],
      image: wordcloud[1],
      isClickable: true,
      imageType: "wordcloud",
    };
    imageGridList.push(new_image_data);
  });

  imageGridList.push({
    title: "Topic Percentage",
    image: bargraph,
    isClickable: false,
    imageType: "bargraph",
  });

  return (
    <div className="ResultPage">
      <Navbar />
      <section className="main">
        <GridImage imageGridList={imageGridList} />
        <div className="news_container">
          <div className="similar_news-heading">
            <span color="red">S</span>imilar <span color="red">N</span>ews
          </div>
          {/* <Carousel news={news}></Carousel> */}
          <RelatedNews newsList={news} />
        </div>
      </section>
      <div className="footer-resultpage">
        <Footer />
      </div>
    </div>
  );
};

export default ResultPage;
