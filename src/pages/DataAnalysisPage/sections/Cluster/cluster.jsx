import "./cluster.css";
import React, { useState, useEffect } from "react";
import { fetchGET } from "../../../../utils/fetch";
import document_cluster from "../../../../assets/images/document_cluster.png";

export const Cluster = () => {
  const [trendImage, setTrendImage] = useState("");

  const fetchData = async () => {
    const trendImageResponse = await fetchGET("topic_dis_of_all_news");
    console.log(trendImage);
    setTrendImage(trendImageResponse["img"]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Cluster">
      <section className="main-section">
        <div className="tabbar-result-container">
          <img
            src={"data:image/png;base64," + trendImage}
            alt="Word cloud of topic"
          />
        </div>
      </section>
    </div>
  );
};
