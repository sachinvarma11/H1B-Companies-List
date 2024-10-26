import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/companies')
      .then(response => setCompanies(response.data))
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:5000/api/companies/search?query=${searchTerm}`)
      .then(response => setCompanies(response.data))
      .catch(error => console.error('Error searching companies:', error));
  };

  return (
    <div className="company-list">
      <h2>H1B Sponsoring Companies</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search companies..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {companies.map(company => (
          <li key={company._id}>
            <Link to={`/company/${company._id}`}>{company.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;
