import "./barchartRace.css";
import React, { useState, useEffect } from "react";
import { fetchGET } from "../../../../utils/fetch";
import ReactPlayer from "react-player";
import RaceVideo from "../../../../assets/video/barchart_race.mp4";

export const BarChartRace = () => {
  const fetchData = async () => {
    // const wordcloudsResponse = await fetchGET("");
    // const wordclouds = wordcloudsResponse["word_clouds"];
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="BarChartRace">
      <section className="main-section">
        <div className="tabbar-result-container">
          <ReactPlayer
            className="react-player fixed-bottom"
            url={RaceVideo}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </section>
    </div>
  );
};
