import React from "react";
import AboutModal from "./AboutModal";

const Header = () => {
  return (
    <div className="header">
      <h1>
        REACT Interview Ouestions And Answers
        <AboutModal />
      </h1>
    </div>
  );
};

export default Header;
