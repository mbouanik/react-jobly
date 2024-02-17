import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api/api";

const JobDetails = () => {
  const [job, setJob] = useState(null);
  const params = useParams();

  useEffect(() => {
    getJob(params.id);
  }, []);

  const getJob = async (id) => {
    const res = await JoblyApi.getJob(id);
    setJob(res);
  };

  if (!job) return <div> Loading... </div>;
  return <div> {job.title} </div>;
};

export default JobDetails;
