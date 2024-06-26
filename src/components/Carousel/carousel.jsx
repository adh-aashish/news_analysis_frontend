import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import './carousel.css';
import setopati from "../../assets/images/setopati.png"

const Carousel = ({
  news,
  showControls = true,
  showIndicators = true,
  effect = 'slide',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? news.length - 1 : prevIndex - 1
    );
  }, [news.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === news.length - 1 ? 0 : prevIndex + 1
    );
  }, [news.length]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     handleNext();
  //   }, 3000);
  //
  //   return () => clearInterval(timer);
  // }, [handleNext]);

  return (
    <>
    <div
      className={`carousel-wrapper ${effect}`}
      onKeyDown={handleKeyDown}
      tabIndex='0'
      aria-live='polite'
      aria-roledescription='carousel'
    >
      <div className='carousel-items'>
        {news.map((el, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            style={
              effect === 'slide'
                ? { transform: `translateX(-${activeIndex * 100}%)` }
                : {}
            }
          >
            <div className="news_item-container">
              <div className='image-container'>
                <img src={setopati} alt={"image of media"} className="news-logo" />
              </div>
              <div className='heading-container'>
                <div className='heading-meta'>
                  <div>{el[1]}</div>
                  <div>{el[3]}</div>
                </div>
                <a href={el[2]}><div className='news-title'>{el[0]}</div></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            className='carousel-control prev'
            onClick={handlePrev}
            aria-label='Previous slide'
          >
            <FaArrowLeft fontSize={25}/>
          </button>
          <button
            className='carousel-control next'
            onClick={handleNext}
            aria-label='Next slide'
          >
            <FaArrowRight fontSize={25}/>
          </button>
        </>
      )}

    </div>
      {showIndicators && (
        <div className='carousel-pagination'>
          {news.map((_, index) => (
            <button
              key={index}
  className={`pagination-indicator ${
                index === activeIndex ? 'active' : ''
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </>
  );
};

export default Carousel;
