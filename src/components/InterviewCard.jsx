import React, { useState } from "react";

const InterviewCard = ({ data }) => {
  const [answer, setAnswer] = useState(false);

  return (
    <>
      {data.map((item) => (
        <div className="cards" key={item.id}>
          <li>{item.question}</li>
          <button>asdgasdg</button>
        </div>
      ))}
    </>
  );
};

export default InterviewCard;
