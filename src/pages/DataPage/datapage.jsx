import InputForm from "../../components/InputForm/inputform"
import Logo from "../../components/Logo/logo"
import Footer from "../../components/Footer/footer"
import { MdSettings } from "react-icons/md"
import "./datapage.css"
import "../ResultPage/resultpage.css"
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"

function FetchWordCloud() {
  const [wordclouds, setWordClouds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setWordClouds(result["word_clouds"]);
    };
    fetchData();
  }, []);

  return wordclouds;
}

const NewsPage = () => {
  const navigate = useNavigate();
  const handleClick = async (id) => {
    console.log(id)
    const data = {
      id : id
    }
    navigate("/news", {state : data});
  }

  const wordclouds = FetchWordCloud();

  return (
    <div className="NewsPage">
      <header className="heading">
        <div className="heading_items">
          <Logo />
          <InputForm />
          <MdSettings className="setting_logo" />
        </div>
      </header>
      <section className="main_result">
        <div className="topic-vis-container">
          <div className="wordcloud-container" >
            {
              wordclouds.map((wordcloud, index) => (
                <> 
                  <div className="wordcloud" key={index}>
                    <div>
                      <div className="wordcloud-title">
                        {"Topic "+ wordcloud[0] }
                      </div>
                      <button onClick={ ()=> handleClick(wordcloud[0]) }>
                        <img src={"data:image/png;base64,"+ wordcloud[1]} alt="Word cloud of topic" width={515} height={268}  />
                      </button>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
        </div>
      </section>
      <div className="footer-resultpage">
        <Footer/>
      </div>
   </div>
  )
}

export default NewsPage;
