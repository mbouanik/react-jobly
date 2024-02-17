import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JoblyApi from "./api/api";
import Company from "./Company";
import SearchForm from "./SearchForm";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);
  const getCompanies = async () => {
    const res = await JoblyApi.getCompanies();
    setCompanies(res);
  };
  const searchCompany = async name => {
    const res = await JoblyApi.getCompaniesByName(name);
    setCompanies(res);
  };

  return (
    <div>
      <SearchForm searchFor={searchCompany} />
      {companies.map(company => (
        <Link to={`${company.handle}`}>
          <Company key={company.handle} company={company} />
        </Link>
      ))}
    </div>
  );
};

export default CompanyList;
