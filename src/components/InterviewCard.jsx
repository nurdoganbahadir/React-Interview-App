import React, { useState } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const InterviewCard = ({ item }) => {
  const [answer, setAnswer] = useState(false);

  const handleClick = () => {
    setAnswer(!answer);
  };

  return (
    <div className="cards">
      <li className="questions">{item.question}</li>
      {answer && <p className="answers">{item.answer}</p>}
      <button onClick={handleClick} className="arrow-btn">
        {answer ? <FaRegArrowAltCircleUp /> : <FaRegArrowAltCircleDown />}
      </button>
    </div>
  );
};

export default InterviewCard;
