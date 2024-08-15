const mongoose = require('mongoose');

const RuleSchema = new mongoose.Schema({
  ruleString: {
    type: String,
    required: true,  // This field is required
  },
  astStructure: {
    type: Object,  // You might want to use Object or a specific schema type
    required: true,  // This field is required
  },
});

module.exports = mongoose.model('Rule', RuleSchema);
