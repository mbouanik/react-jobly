import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchForm = ({ searchFor }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = evt => {
    setSearchTerm(evt.target.value);
    console.log(searchTerm);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    searchFor(searchTerm);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button> Search </Button>
    </Form>
  );
};

export default SearchForm;
