import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2
            className="section__title"
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-delay="100"
            data-aos-duration="500">
            Why choose
            <span
              className="blue"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="400"
              data-aos-duration="800">
              {" "}
              Magic Books
            </span>{" "}
          </h2>
          <div
            className="highlight__wrapper"
            data-aos="fade"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-once="true">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              subtitle={"Quick and Easy"}
              para={" Get access to the books you purchased online instantly"}
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              subtitle={"10,000+ Books"}
              para={"Magic Books has a huge collection for you to choose from!"}
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              subtitle={"Affordable"}
              para={"Get best selling books for as little as $10"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
