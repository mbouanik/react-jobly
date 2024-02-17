import React, { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const JobCard = ({ job }) => {
  const { currentUser, applyToJob, hasAppliedToJob } = useContext(UserContext);
  const [applied, setApplied] = useState(false);
  useEffect(() => {
    setApplied(hasAppliedToJob(job.id));
  }, []);

  const handleApplyToJob = () => {
    applyToJob(currentUser.username, job.id);
    setApplied(true);
  };
  // const handleHasAppliedToJob = (job.id) => {};
  return (
    <Card className="jobCard-card">
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Text>{job.companyName}</Card.Text>
        <Card.Text>{job.salary}</Card.Text>
        <Card.Text>
          {job.equity ? `Yes equity:${job.equity}` : " No equity"}
        </Card.Text>
        <Button onClick={handleApplyToJob} disabled={applied}>
          {applied ? "Applied" : "Apply"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
