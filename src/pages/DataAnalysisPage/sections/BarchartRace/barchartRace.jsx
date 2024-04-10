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
          {/* <ReactPlayer
            className="react-player fixed-bottom"
            url={RaceVideo}
            width="100%"
            height="100%"
            controls={true}
          /> */}
          {/* <iframe
            src="https://public.tableau.com/views/NepaliNews/Sheet1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link&:embed=true"
            width="645"
            height="955"
            title="Barchart Race"
          ></iframe>
          <script src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script> */}
          <iframe
            src="./tableu.html"
            width="90%"
            height="900"
            title="Inter topic distance visualization"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
