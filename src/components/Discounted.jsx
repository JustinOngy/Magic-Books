import React from "react";
import { books } from "../data";
import Book from "./ui/Book";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2
            className="section__title"
            data-aos="fade-right"
            data-aos-delay="350"
            data-aos-duration="500"
            data-aos-once="true">
            Discounted <span className="blue">Books</span>
          </h2>
          <div
            className="books"
            data-aos="fade"
            data-aos-delay="550"
            data-aos-duration="800"
            data-aos-once="true">
            {books
              .filter((book) => book.salePrice > 0)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
          <div
            className="books"
            data-aos="fade-right"
            data-aos-delay="650"
            data-aos-duration="800"
            data-aos-once="true">
            {" "}
            {books
              .filter((book) => book.salePrice > 0)
              .slice(4, 8)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
