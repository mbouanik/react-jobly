import React, { useState, useEffect } from "react";
import JoblyApi from "./api/api";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const JobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    getJobs();
  }, []);
  const getJobs = async () => {
    const res = await JoblyApi.getJobs();
    setJobs(res);
  };
  const getJobsByTitle = async title => {
    const res = await JoblyApi.getJobsByTitle(title);
    setJobs(res);
  };

  if (!jobs) return <div> Loading... </div>;
  return (
    <div className="card">
      <SearchForm searchFor={getJobsByTitle} />
      <ListGroup as="ul">
        {jobs.map(job => (
          <ListGroup.Item as="li">
            <JobCard key={job.id} job={job} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
export default JobList;
