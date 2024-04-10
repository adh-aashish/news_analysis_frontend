import "./trend.css";
import React, { useState, useEffect } from "react";
import { fetchGET } from "../../../../utils/fetch";

export const Trend = () => {
  // const [trendImage, setTrendImage] = useState("");
  const fetchData = async () => {};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Trend">
      <section className="main-section">
        <div className="tabbar-result-container"></div>
      </section>
    </div>
  );
};
