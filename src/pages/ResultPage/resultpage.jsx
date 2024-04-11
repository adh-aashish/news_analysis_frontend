import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
// import Carousel from "../../components/Carousel/carousel";
import "./resultpage.css";
import { GridImage } from "../../components/GridImage/imageGrid";
import { RelatedNews } from "../TopicAnalysisPage/sections/RelatedNews/relatedNews";
import { useEffect, useState } from "react";
import { fetchPOST } from "../../utils/fetch";

const ResultPage = () => {
  const location = useLocation();
  const [imageGridList, setImageGridList] = useState([]);
  const [news, setNews] = useState([]);
  const [sortByDate, setSortByDate] = useState(false);

  const body = location.state.body;
  console.log(body);
  // var news = [];
  // for (let i = 0; i < news.length; i++) {
  //   news.push({});
  // }
  const fetchData = async () => {
    let url = "";
    if (sortByDate) {
      url = "date";
    } else {
      url = "score";
    }
    console.log(sortByDate);
    try {
      const result = await fetchPOST("info/?sort=" + url, body);

      // console.log(result);
      const wordclouds = result["topic_word_clouds"];
      const bargraph = result["topics_by_percentage"];
      // setWordClouds(result["topic_word_clouds"]);

      const imageList = [];

      wordclouds.forEach(function (wordcloud) {
        const new_image_data = {
          title: "Topic ID: " + wordcloud[2],
          image: wordcloud[1],
          isClickable: true,
          imageType: "wordcloud",
        };
        imageList.push(new_image_data);
      });

      imageList.push({
        title: "Topic Percentage",
        image: bargraph,
        isClickable: false,
        imageType: "bargraph",
      });

      setImageGridList(imageList);
      setNews(result["similar_news"]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [sortByDate]);

  const handleFilterChange = () => {
    setSortByDate(!sortByDate);
  };

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
          <RelatedNews
            newsList={news}
            handleFilterChange={handleFilterChange}
          />
        </div>
      </section>
      <div className="footer-resultpage">
        <Footer />
      </div>
    </div>
  );
};

export default ResultPage;
