import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div class="bg-image"></div>
        <div className="header__container">
          <div className="header__description">
            <h1
              className="header__landing--title"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500">
              Welcome to
              <span className="magic">
                <span className="magic-star">
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>

                <span className="magic-text">Magic Books!</span>
              </span>
            </h1>
            <h2
              className="header__landing--subtitle"
              data-aos="fade-up"
              data-aos-delay="750"
              data-aos-duration="750"
              data-aos-once="true">
              the enchanting online library platform where you can dive into a
              world of endless knowledge and imagination
              <span className="orange"> you!</span>
            </h2>
            <Link
              to="/books"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-once="true">
              <button className="btn">Browse books</button>
            </Link>
          </div>

          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Landing;
