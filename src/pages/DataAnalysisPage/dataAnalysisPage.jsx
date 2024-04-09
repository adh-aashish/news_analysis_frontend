import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Tabbar } from "../../components/Tabbar/tabbar";
import "./dataAnalysisPage.css";
import { WordClouds } from "./sections/WordClouds/wordclouds";
import { Cluster } from "./sections/Cluster/cluster";
import { Trend } from "./sections/Trend/trend";
import { BarChartRace } from "./sections/BarchartRace/barchartRace";
import { InterTopicDist } from "./sections/InterTopicDist/intertopicdist";

const DataAnalysisPage = () => {
  const topicMap = {
    wordcloud: <WordClouds />,
    cluster: <Cluster />,
    trend: <Trend />,
    barchartRace: <BarChartRace />,
    intertopicdist: <InterTopicDist />,
  };

  return (
    <div className="DataAnalysisPage">
      <Navbar />
      <div className="main">
        <Tabbar topicMap={topicMap} />
      </div>
      <Footer />
    </div>
  );
};

export default DataAnalysisPage;
