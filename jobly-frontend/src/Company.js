import React from "react";
import Card from "react-bootstrap/Card";

const Company = ({ company }) => {
  return (
    <Card className="">
      <Card.Title>{company.name}</Card.Title>
      <Card.Text>{company.description}</Card.Text>
    </Card>
  );
};

export default Company;
