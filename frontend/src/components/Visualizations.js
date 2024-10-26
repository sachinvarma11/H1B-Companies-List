import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Visualizations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/companies')
      .then(response => {
        const processedData = response.data.slice(0, 20).map(company => ({
          name: company.name,
          initialApprovals: company.initialApprovals,
          continuingApprovals: company.continuingApprovals,
        }));
        setData(processedData);
      })
      .catch(error => console.error('Error fetching data for visualization:', error));
  }, []);

  return (
    <div className="visualizations">
      <h2>Top 20 H1B Sponsoring Companies</h2>
      <BarChart width={1000} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={100} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="initialApprovals" fill="#8884d8" />
        <Bar dataKey="continuingApprovals" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default Visualizations;
