const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const Company = require('./models/company');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const results = [];

fs.createReadStream('path/to/your/csv/file.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    Company.insertMany(results)
      .then(() => {
        console.log('Data imported successfully');
        mongoose.connection.close();
      })
      .catch((error) => {
        console.error('Error importing data:', error);
        mongoose.connection.close();
      });
  });
