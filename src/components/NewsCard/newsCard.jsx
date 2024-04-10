import React from "react";
import "./newsCard.css";
import setopati from "../../assets/images/setopati.png";

const NewsCard = ({ news }) => {
  return (
    <div className="news-card-container">
      <div className="image-container">
        <img
          src={setopati}
          alt="logo of the news source"
          className="news-logo"
        />
      </div>
      <div className="heading-container">
        <div className="heading-content">
          <div className="heading-meta">
            <div>{news.date}</div>
            <div className="heading-score">
              Similarity : {(news.score * 100).toFixed(2)} %
            </div>
          </div>
          <a href={news.link}>
            <div className="news-title">{news.title}</div>
          </a>
        </div>
      </div>
    </div>
    // <div className="news-card">
    //   <div className="image-container">
    //     <img src={setopati} alt="media" className="media-logo" />
    //   </div>
    //   <div className="meta-info">
    //     <div>{news.date}</div>
    //     <div>{news.source}</div>
    //   </div>
    //   <div className="news-heading">
    //     <a href={news.link}>
    //       <div className="">{news.title}</div>
    //     </a>
    //   </div>
    // </div>
  );
};

export default NewsCard;

// <div className="news-container">
//   {newsList.map((news, index) => (
//     <div className="news-card" key={index}>
//       <div className="image-container">
//         <img src={setopati} alt="media" className="media-logo" />
//       </div>
//       <div className="meta-info">
//         <div>{news.date}</div>
//         <div>{news.source}</div>
//       </div>
//       <div className="news-heading">
//         <a href={news.link}>
//           <div className="">{news.title}</div>
//         </a>
//       </div>
//     </div>
//   ))}
// </div>
