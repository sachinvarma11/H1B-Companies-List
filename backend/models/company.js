const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { type: String, required: true },
  fiscalYear: { type: Number, required: true },
  initialApprovals: { type: Number, required: true },
  initialDenials: { type: Number, required: true },
  continuingApprovals: { type: Number, required: true },
  continuingDenials: { type: Number, required: true },
  naicsCode: { type: String, required: true },
  taxId: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
