import "./trend.css";
import React, { useState, useEffect } from "react";
import { fetchGET } from "../../../../utils/fetch";
import document_count_per_year from "../../../../assets/images/document_count_per_year.png";

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
          <img src={document_count_per_year} alt="document cluster" />
        </div>
      </section>
    </div>
  );
};
