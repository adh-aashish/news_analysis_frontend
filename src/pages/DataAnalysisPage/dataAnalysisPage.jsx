import Navbar from "../../components/Navbar/navbar";
import { Tabbar } from "../../components/Tabbar/tabbar";
import "./dataAnalysisPage.css";
import { WordClouds } from "../WordClouds/wordclouds";

const DataAnalysisPage = () => {
  const topicMap = {
    wordcloud: <WordClouds />,
    cluster: <WordClouds />,
    trend: <WordClouds />,
  };

  return (
    <div className="DataAnalysisPage">
      <Navbar />
      <div className="main">
        <Tabbar topicMap={topicMap} />
      </div>
    </div>
  );
};

export default DataAnalysisPage;
