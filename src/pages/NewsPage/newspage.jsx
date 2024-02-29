import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { fetchGET } from "../../utils/fetch";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./newspage.css";
import setopati from "../../assets/images/setopati.png";
import { GridImage } from "../../components/GridImage/imageGrid";

export const NewsPage = () => {
  const [topNews, setTopNews] = useState([]);
  const location = useLocation();
  const id = location.state.id;
  const wordcloud = location.state.wordcloud;

  const fetchData = async () => {
    const newsListResponse = await fetchGET("topics/" + id);
    setTopNews(newsListResponse["top_news"]);
  };

  const imageGridList = [];
  imageGridList.push({
    title: "Topic ID: " + (id + 1),
    image: wordcloud,
    isClickable: true,
    imageType: "wordcloud",
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="DataPage">
      <Navbar />
      <section className="main-section">
        <GridImage imageGridList={imageGridList} />
        <div className="news-heading-tmp">Top News</div>
        <div className="news-container">
          {topNews.map((news, index) => (
            <div className="news-card" key={index}>
              <div className="image-container">
                <img src={setopati} alt="media" className="media-logo" />
              </div>
              <div className="meta-info">
                <div>{news.date}</div>
                <div>{news.source}</div>
              </div>
              <div className="news-heading">
                <a href={news.link}>
                  <div className="">{news.title}</div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="footer-resultpage">
        <Footer />
      </div>
    </div>
  );
};
