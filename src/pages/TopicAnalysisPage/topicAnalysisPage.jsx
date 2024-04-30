import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { fetchGET } from "../../utils/fetch";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./topicAnalysisPage.css";
import { GridImage } from "../../components/GridImage/imageGrid";
import { Tabbar } from "../../components/Tabbar/tabbar";
import { Trend } from "./sections/Trend/trend";
import { RelatedNews } from "./sections/RelatedNews/relatedNews";

export const TopicAnalysisPage = () => {
  const [topNews, setTopNews] = useState([]);
  const [trendFig, setTrendFig] = useState("");
  const [sortByDate, setSortByDate] = useState(false);
  const location = useLocation();
  const id = location.state.id;
  const wordcloud = location.state.wordcloud;

  const handleFilterChange = () => {
    setSortByDate(!sortByDate);
  };

  const imageGridList = [];
  imageGridList.push({
    title: "Topic ID: " + (id + 1),
    image: wordcloud,
    isClickable: true,
    imageType: "wordcloud",
  });

  useEffect(() => {
    const fetchData = async () => {
      let url = "";
      if (sortByDate) {
        url = "date";
      } else {
        url = "score";
      }
      const newsListResponse = await fetchGET("topics/" + id + "?sort=" + url);
      setTopNews(newsListResponse["top_news"]);
      setTrendFig(newsListResponse["topic_trend"]);
      // console.log("trend fig", trendFig);
    };
    fetchData();
  }, [sortByDate, id]);

  const topicMap = {
    news: (
      <RelatedNews newsList={topNews} handleFilterChange={handleFilterChange} />
    ),
    trend: <Trend figure={trendFig} />,
  };

  return (
    <div className="TopicAnalysisPage">
      <Navbar />
      <section className="main">
        <div className="topic-cloud">
          <GridImage imageGridList={imageGridList} />
        </div>
        <Tabbar topicMap={topicMap} />
        {/* <div className="news-heading-tmp">Top News</div>
         */}
      </section>
      <div className="footer-resultpage">
        <Footer />
      </div>
    </div>
  );
};
