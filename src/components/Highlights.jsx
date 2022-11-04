import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose
            <span className="blue"> Magic Books</span>{" "}
          </h2>
          <div className="highlight__wrapper">
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
              icon={<FontAwesomeIcon icon="bolt" />}
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
