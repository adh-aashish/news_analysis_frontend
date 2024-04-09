import "./intertopicdist.css";
import React, { useState, useEffect } from "react";
import { fetchGET } from "../../../../utils/fetch";

export const InterTopicDist = () => {
  const fetchData = async () => {
    // const wordcloudsResponse = await fetchGET("");
    // const wordclouds = wordcloudsResponse["word_clouds"];
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="InterTopicDist">
      <section className="main-section">
        <div className="tabbar-result-container">
          <iframe
            src="./intertopic_distance.html"
            width="100%"
            height="900"
            title="Inter topic distance visualization"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
