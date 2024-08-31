import React from "react";
import InterviewCard from "./InterviewCard";
import Container from "react-bootstrap/Container";
import questions from "../helper/data";

const CardContainer = () => {

  return (
    <Container>
      <InterviewCard data={questions} />
    </Container>
  );
};

export default CardContainer;
