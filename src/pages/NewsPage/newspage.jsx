import InputForm from "../../components/InputForm/inputform";
import Logo from "../../components/Logo/logo";
import Footer from "../../components/Footer/footer";
import { MdSettings } from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./newspage.css";
import "../ResultPage/resultpage.css";
import setopati from "../../assets/images/setopati.png";

function FetchNews(id) {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/topics/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setNewsList(result["top_news"]);
    };
    fetchData();
  }, []);
  console.log(newsList);
  return newsList;
}

const DataPage = () => {
  const location = useLocation();
  const id = location.state.id;
  const wordcloud = location.state.wordcloud;
  const newsList = FetchNews(id);
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
        <div className="wordcloud" key={3}>
          <div>
            <div className="wordcloud-title">Topic id : {id}</div>
            <img
              src={"data:image/png;base64," + wordcloud}
              alt="Word cloud of topic"
              width={515}
              height={268}
            />
          </div>
        </div>
        <div className="news-heading-tmp">Top News</div>
        <div className="news-container">
          {newsList.map((news, index) => (
            <div className="news-card" key={index}>
              <div className="image-container">
                <img src={setopati} alt="media image" className="media-logo" />
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

export default DataPage;
