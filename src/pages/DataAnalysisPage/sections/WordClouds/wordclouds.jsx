import "./wordclouds.css";
import React, { useState, useEffect } from "react";
import { GridImage } from "../../../../components/GridImage/imageGrid";
import { fetchGET } from "../../../../utils/fetch";

export const WordClouds = () => {
  const [imageGridList, setImageGridList] = useState([]);

  const fetchData = async () => {
    const wordcloudsResponse = await fetchGET("");
    const wordclouds = wordcloudsResponse["word_clouds"];

    const imgList = [];
    for (let wordcloud of wordclouds) {
      const new_image_data = {
        title: "Topic ID: " + (wordcloud[0] + 1),
        image: wordcloud[1],
        isClickable: true,
        imageType: "wordcloud",
      };
      imgList.push(new_image_data);
    }
    setImageGridList(imgList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="WordClouds">
      <section className="main-section">
        <div className="topic-vis-container">
          {imageGridList.length ? (
            <GridImage imageGridList={imageGridList} />
          ) : (
            "Loading Data"
          )}
        </div>
      </section>
    </div>
  );
};
