import { useNavigate } from "react-router-dom";

import "./imageGrid.css";

export const GridImage = (props) => {
  const imageGridList = props.imageGridList;
  const navigate = useNavigate();
  const handleClick = async (id) => {
    const data = {
      id: id,
      wordcloud: imageGridList[id]["image"],
    };
    navigate("/news", { state: data });
  };

  return (
    <div className="imageGrid-container" key={1}>
      {imageGridList.map((imageGridItem, index) => (
        <div className="imageGrid" key={index}>
          <div>
            <div className="imageGrid-title">{imageGridItem["title"]}</div>
            <button
              onClick={() => {
                if (imageGridItem["imageType"] === "wordcloud") {
                  handleClick(index);
                }
              }}
            >
              <img
                src={"data:image/png;base64," + imageGridItem["image"]}
                alt="Word cloud of topic"
                width={515}
                height={268}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
