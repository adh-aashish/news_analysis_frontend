import "./trend.css";
import React, { useState, useEffect } from "react";
import { fetchGET } from "../../../../utils/fetch";
import topic_trend from "../../../../assets/images/0.png";

export const Trend = () => {
  const fetchData = async () => {
    // const wordcloudsResponse = await fetchGET("");
    // const wordclouds = wordcloudsResponse["word_clouds"];
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Trend">
      <section className="main-section">
        <div className="tabbar-result-container">
          <img src={topic_trend} alt="document cluster" />
        </div>
      </section>
    </div>
  );
};
