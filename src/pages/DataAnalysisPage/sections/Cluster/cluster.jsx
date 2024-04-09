import "./cluster.css";
import React, { useState, useEffect } from "react";
import { fetchGET } from "../../../../utils/fetch";
import document_cluster from "../../../../assets/images/document_cluster.png";

export const Cluster = () => {
  const fetchData = async () => {
    // const wordcloudsResponse = await fetchGET("");
    // const wordclouds = wordcloudsResponse["word_clouds"];
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Cluster">
      <section className="main-section">
        <div className="tabbar-result-container">
          <img src={document_cluster} alt="document cluster" />
        </div>
      </section>
    </div>
  );
};
