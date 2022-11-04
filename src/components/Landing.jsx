import React from "react";
import UndrawBooks from "../assets/undraw_reading.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>
              The most <span className="blue">magical</span> online
              user-friendly library platform
            </h1>
            <h2>
              Find the book that's just right for
              <span className="blue"> you!</span>{" "}
            </h2>
            <a href="#features">
              <button className="btn">Browse books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
