import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CompanyDetails() {
  const [company, setCompany] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/companies/${id}`)
      .then(response => setCompany(response.data))
      .catch(error => console.error('Error fetching company details:', error));
  }, [id]);

  if (!company) return <div>Loading...</div>;

  return (
    <div className="company-details">
      <h2>{company.name}</h2>
      <p>Fiscal Year: {company.fiscalYear}</p>
      <p>Initial Approvals: {company.initialApprovals}</p>
      <p>Initial Denials: {company.initialDenials}</p>
      <p>Continuing Approvals: {company.continuingApprovals}</p>
      <p>Continuing Denials: {company.continuingDenials}</p>
      <p>NAICS Code: {company.naicsCode}</p>
      <p>Location: {company.city}, {company.state} {company.zip}</p>
    </div>
  );
}

export default CompanyDetails;
