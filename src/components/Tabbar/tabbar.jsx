import { useState } from "react";
import "./tabbar.css";

export const Tabbar = (props) => {
  const [currentKey, setCurrentKey] = useState(Object.keys(props.topicMap)[0]);
  const handleTopicClick = (e) => {
    setCurrentKey(e.currentTarget.getAttribute("datakey"));
  };
  return (
    <div className="tabbar-container">
      <div className="tabbar-heading">
        {Object.keys(props.topicMap).map((topic, index) => {
          return (
            <div
              className={`tabbar-box ${currentKey === topic ? "active" : ""}`}
              onClick={handleTopicClick}
              datakey={topic}
              key={index}
            >
              {topic}
            </div>
          );
        })}
      </div>
      <div className="tabbar-page">{props.topicMap[currentKey]}</div>
    </div>
  );
};
