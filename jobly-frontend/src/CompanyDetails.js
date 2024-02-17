import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api/api";
import JobCard from "./JobCard";

const CompanyDetails = () => {
  const [company, setCompany] = useState("");
  const params = useParams();

  useEffect(() => {
    getCompany(params.handle);
  }, []);

  const getCompany = async handle => {
    const res = await JoblyApi.getCompany(handle);
    setCompany(res);
  };
  if (!company) return <div> Loading... </div>;
  return (
    <div>
      {company.name}
      {company.description}
      {company.jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default CompanyDetails;
