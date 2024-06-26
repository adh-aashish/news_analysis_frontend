import "./relatedNews.css";
import React, { useState, useEffect } from "react";
import { fetchGET } from "../../../../utils/fetch";
import topic_trend from "../../../../assets/images/0.png";
import NewsCard from "../../../../components/NewsCard/newsCard";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export const RelatedNews = ({ newsList, handleFilterChange }) => {
  const fetchData = async () => {
    // const wordcloudsResponse = await fetchGET("");
    // const wordclouds = wordcloudsResponse["word_clouds"];
  };
  // const newsList = [];
  // for (let i = 0; i < 10; i++) {
  //   newsList.push({
  //     date: 2024 - 12 - 14,
  //     source: "Setopati",
  //     link: "www.google.com",
  //     title: "Why is it so hard?",
  //     score: "9.1",
  //   });
  // }
  const options = ["Date", "Relevance"];
  const defaultOption = options[1];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="RelatedNews">
      <section className="main-section">
        <div className="dropdown-container">
          <div className="Sort-text">Sort By</div>
          <Dropdown
            options={options}
            onChange={handleFilterChange}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        <div className="tabbar-result-container">
          <div className="news-grid">
            {newsList.map((data, index) => (
              <NewsCard news={data} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
