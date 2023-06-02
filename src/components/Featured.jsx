import React from "react";
import Book from "./ui/Book";
import { books } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            <span
              className="blue"
              data-aos="fade"
              data-aos-delay="500"
              data-aos-once="true">
              Featured
            </span>
            <span
              className="black"
              data-aos="fade"
              data-aos-delay="750"
              data-aos-once="true">
              {" "}
              Books.
            </span>
          </h2>
          <div
            className="books"
            data-aos="fade-left"
            data-aos-delay="950"
            data-aos-duration="500"
            data-aos-once="true">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
