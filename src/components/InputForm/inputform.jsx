import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./inputform.css";

const InputForm = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/info", {
      method: "POST",
      body: JSON.stringify({
        content: input.replace(/"/g, "").replace(/\n/g, " ").replace(/'/g, ""),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    // console.log(result["topic_word_clouds"]);
    const topic_word_clouds = result["topic_word_clouds"];
    const topic_percent_bar = result["topics_by_percentage"];
    const similar_news = result["similar_news"];

    const data = {
      wordclouds: topic_word_clouds,
      bargraph: topic_percent_bar,
      similar_news: similar_news,
    };

    navigate("/result", { state: data });
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        type="text"
        name="name"
        className="input-box"
        value={input}
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="search_button" onClick={handleSubmit}>
        <FaSearch className="search_icon" />
      </button>
    </form>
  );
};

export default InputForm;
