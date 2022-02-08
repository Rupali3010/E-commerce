import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden
          defaultChecked="checked"
        />
        <div className="carousel-item">
          <img
            src="https://capricathemes.com/opencart/OPC09/OPC090210/OPC1/image/cache/catalog/main-banner-3-1903x750.jpg"
            alt="banner"
          />
        </div>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden
        />
        <div className="carousel-item">
          <img
            src="https://capricathemes.com/opencart/OPC09/OPC090210/OPC1/image/cache/catalog/main-banner-2-1903x750.jpg"
            alt="banner2"
          />
        </div>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden
        />
        <div className="carousel-item">
          <img
            src="https://capricathemes.com/opencart/OPC09/OPC090210/OPC1/image/cache/catalog/main-banner-1-1903x750.jpg"
            alt="banner3"
          />
        </div>
        <label htmlFor="carousel-3" className="carousel-control prev control-1">
          ‹
        </label>
        <label htmlFor="carousel-2" className="carousel-control next control-1">
          ›
        </label>
        <label htmlFor="carousel-1" className="carousel-control prev control-2">
          ‹
        </label>
        <label htmlFor="carousel-3" className="carousel-control next control-2">
          ›
        </label>
        <label htmlFor="carousel-2" className="carousel-control prev control-3">
          ‹
        </label>
        <label htmlFor="carousel-1" className="carousel-control next control-3">
          ›
        </label>
        <ol className="carousel-indicators">
          <li>
            <label htmlFor="carousel-1" className="carousel-bullet">
              _
            </label>
          </li>
          <li>
            <label htmlFor="carousel-2" className="carousel-bullet">
              _
            </label>
          </li>
          <li>
            <label htmlFor="carousel-3" className="carousel-bullet">
              _
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Carousel;
