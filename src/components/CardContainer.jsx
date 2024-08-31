import React from "react";
import InterviewCard from "./InterviewCard";
import Container from "react-bootstrap/Container";
import data from "../helper/data";

const CardContainer = () => {
  return (
    <Container>
      {data.map((item) => (
        <InterviewCard key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default CardContainer;
