/* const mongoose = require('mongoose');  
const Rule = require('../models/Rule');
const { createRule } = require('../ast/ast'); // Corrected path to ast.js 
const { evaluateRule: evaluateAST } = require('../ast/ast');
// import { combineRules } from '../services/ruleService';

// Controller to create a rule
exports.createRule = async (req, res) => {
  try {  
    const { rule_string } = req.body;
    if (!rule_string) {
      return res.status(400).json({ message: 'Rule string is required' });
    }

    // Generate the AST structure using your existing logic
    const astStructure = createRule(rule_string);

    const newRule = new Rule({
      ruleString: rule_string,
      astStructure: astStructure
    });

    await newRule.save();
    res.status(201).json(newRule);
  } catch (err) {
    console.error("Error in createRule:", err.stack);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.evaluateRule = async (req, res) => {
  try {
    const { rule_id, data } = req.body;

    // Validate input
    if (!rule_id || !data) {
      return res.status(400).json({ message: 'Rule ID and data are required' });
    }

    // Fetch the rule from the database
    const rule = await Rule.findById(rule_id);
    if (!rule) {
      return res.status(404).json({ message: 'Rule not found' });
    }

    // Evaluate the rule using the AST and provided data
    const evaluationResult = evaluateAST(rule.astStructure, data);

    // Respond with the evaluation result
    res.status(200).json({ isValid: evaluationResult });
  } catch (err) {
    console.error("Error in evaluateRule:", err.stack);
    res.status(500).json({ message: 'Server error' });
  }
};


// Controller to get a rule by ID
exports.getRule = async (req, res) => {
  try {
    let { id } = req.params;

    // Trim whitespace characters from the ID
    id = id.trim();

    // Print the received ID for debugging
    console.log(`Received ID: '${id}'`);

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid ID format:', id); // Debugging log
      return res.status(400).json({ message: 'Invalid Rule ID format' });
    }

    // Fetch the rule from the database
    const rule = await Rule.findById(id);
    if (!rule) {
      console.log('Rule not found:', id); // Debugging log
      return res.status(404).json({ message: 'Rule not found' });
    }

    // Return the rule
    res.status(200).json(rule);
  } catch (err) {
    // Print error details for debugging
    console.error("Error in getRule:", err.stack);
    res.status(500).json({ message: 'Server error' });
  } 
};

// Controller to delete a rule by ID
exports.deleteRule = async (req, res) => {
  try {
    let { id } = req.params;

    // Trim whitespace characters from the ID
    id = id.trim();

    // Print the received ID for debugging
    console.log(`Received ID for deletion: '${id}'`);

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid ID format for deletion:', id); // Debugging log
      return res.status(400).json({ message: 'Invalid Rule ID format' });
    }

    // Delete the rule from the database
    const result = await Rule.findByIdAndDelete(id);
    if (!result) {
      console.log('Rule not found for deletion:', id); // Debugging log
      return res.status(404).json({ message: 'Rule not found' });
    }

    // Return success message
    res.status(200).json({ message: 'Rule successfully deleted' });
    console.log(`Rule is deleted: '${id}'`); 
  } catch (err) {
    // Print error details for debugging
    console.error("Error in deleteRule:", err.stack);
    res.status(500).json({ message: 'Server error' });   
  }
};

// Route handler for combining rules
const { combineRules } = require('../services/ruleService');

exports.handleCombineRules = (req, res) => {
    const { rules } = req.body;

    if (!rules || !Array.isArray(rules)) {
        return res.status(400).json({ message: 'Invalid rules input' });
    }

    try {
        const combinedAST = combineRules(rules);
        res.status(200).json({ combinedAST });
    } catch (err) {
        console.error("Error in handleCombineRules:", err.stack);
        res.status(500).json({ message: 'Server error' });
    }
}; */ 

 /*const mongoose = require('mongoose');  
const Rule = require('../models/Rule');
const { createRule } = require('../ast/ast');
const { evaluateRule: evaluateAST } = require('../ast/ast');
const { combineRulesService } = require('../services/ruleService'); // Ensure this is correct

const Rule = require('./Rule'); // Import the Rule model (adjust path if necessary)



// Controller to create a rule
exports.createRule = async (req, res) => {
  try {  
    console.log('Request body:', req.body); 

    const { rule_string } = req.body;
    if (!rule_string) {
      return res.status(400).json({ message: 'Rule string is required' });
    }

    // Generate the AST structure using your existing logic
    const astStructure = createRule(rule_string);

    const newRule = new Rule({
      ruleString: rule_string,
      astStructure: astStructure
    });

    await newRule.save();
    res.status(201).json(newRule);
  } catch (err) {
    console.error("Error in createRule:", err.stack);
    res.status(500).json({ message: 'Server error' });
  }
};


// Controller to evaluate a rule
exports.evaluateRule = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const { rule_id, data } = req.body;

    // Validate input
    if (!rule_id || !data) {
      return res.status(400).json({ message: 'Rule ID and data are required' });
    }

    // Fetch the rule from the database
    const rule = await Rule.findById(rule_id);
    if (!rule) {
      return res.status(404).json({ message: 'Rule not found' });
    }

    // Evaluate the rule using the AST and provided data
    const evaluationResult = evaluateAST(rule.astStructure, data);

    // Respond with the evaluation result
    res.status(200).json({ isValid: evaluationResult });
  } catch (err) {
    console.error("Error in evaluateRule:", err.stack);
    res.status(500).json({ message: 'Server error' });
  }
}; 

// Controller to get a rule by ID
exports.getRule = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    let { id } = req.params;

    // Trim whitespace characters from the ID
    id = id.trim();

    // Print the received ID for debugging
    console.log(`Received ID: '${id}'`);

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid ID format:', id); // Debugging log
      return res.status(400).json({ message: 'Invalid Rule ID format' });
    }

    // Fetch the rule from the database
    const rule = await Rule.findById(id);
    if (!rule) {
      console.log('Rule not found:', id); // Debugging log
      return res.status(404).json({ message: 'Rule not found' });
    }

    // Return the rule
    res.status(200).json(rule);
  } catch (err) {
    // Print error details for debugging
    console.error("Error in getRule:", err.stack);
    res.status(500).json({ message: 'Server error' });
  } 
};

// Controller to delete a rule by ID
exports.deleteRule = async (req, res) => {
  try { 
    console.log('Request body:', req.body);
    let { id } = req.params;

    // Trim whitespace characters from the ID
    id = id.trim();

    // Print the received ID for debugging
    console.log(`Received ID for deletion: '${id}'`);

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid ID format for deletion:', id); // Debugging log
      return res.status(400).json({ message: 'Invalid Rule ID format' });
    }

    // Delete the rule from the database
    const result = await Rule.findByIdAndDelete(id);
    if (!result) {
      console.log('Rule not found for deletion:', id); // Debugging log
      return res.status(404).json({ message: 'Rule not found' });
    }

    // Return success message
    res.status(200).json({ message: 'Rule successfully deleted' });
    console.log(`Rule is deleted: '${id}'`); 
  } catch (err) {
    // Print error details for debugging
    console.error("Error in deleteRule:", err.stack);
    res.status(500).json({ message: 'Server error' });   
  }
};

// Route handler for combining rules
exports.handleCombineRules = async (req, res) => { 
  console.log('Request body:', req.body);
    const { rules } = req.body;

    if (!rules || !Array.isArray(rules)) {
        return res.status(400).json({ message: 'Invalid rules input' });
    }

    try {
        const combinedAST = await combineRulesService(rules); // Ensure this function is awaited
        res.status(200).json({ combinedAST });
    } catch (err) {
        console.error("Error in handleCombineRules:", err.stack);
        res.status(500).json({ message: 'Server error' });
    }
};   */  // Lol


// Export your other functions as well


// In ruleController.js

 /* exports.updateRule = async (req, res) => {
  try {
    const { id } = req.params;
    const { ruleString, astStructure } = req.body;

    // Trim whitespace characters from the ID
    const trimmedId = id.trim();

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(trimmedId)) {
      return res.status(400).json({ message: 'Invalid Rule ID format' });
    }

    // Update the rule in the database
    const updatedRule = await Rule.findByIdAndUpdate(
      trimmedId,
      { ruleString, astStructure }, 
      { new: true } // Return the updated document 
    );

    if (!updatedRule) {
      return res.status(404).json({ message: 'Rule not found' });
    }

    res.status(200).json(updatedRule);
  } catch (err) {
    console.error("Error in updateRule:", err.stack);
    res.status(500).json({ message: 'Server error' });  
  }
}; */ 

const mongoose = require('mongoose');
const Rule = require('../models/Rule');
const { createAST } = require('../ast/ast'); // Adjust the import path as needed
const { evaluateAST } = require('../ast/ast'); // Adjust the import path as needed
const { combineRulesService } = require('../services/ruleService'); // Ensure this is correct
const {combineRules } = require('../ast/ast');

// Controller to create a rule
/* exports.createRule = async (req, res) => {
  try {
    console.log('Request body:', req.body);

    const { rule_string } = req.body;
    if (!rule_string) {
      return res.status(400).json({ message: 'Rule string is required' });
    }

    const astStructure = createAST(rule_string);

    const newRule = new Rule({
      ruleString: rule_string,
      astStructure: astStructure
    });

    await newRule.save();
    res.status(201).json(newRule);
  } catch (err) {
    console.error("Error in createRule:", err.stack);
    res.status(500).json({ message: 'Server error' });
  }
}; */ 

// ruleController.js

const createRule = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    
    const  {ruleString}  = req.body.rule_string;  // Changed from rule_string to ruleString
    console.log(typeof(ruleString)) 
    if (!ruleString) {
      return res.status(400).json({ message: 'Rule string is required' });
    }

    // Generate the AST structure
    /* const astStructure = createAST(ruleString);

    const newRule = new Rule({
      ruleString: ruleString,
      astStructure: astStructure
    }); */ 
    console.log(ruleString);
     const newRule = createRules(ruleString);
    await newRule.save();
    res.status(201).json(newRule);
  } catch (err) {
    console.error("Error in createRule:", err.stack);
    res.status(500).json({ message: 'Server error' });
  }
};


// Controller to evaluate a rule
const evaluateRule = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const { rule_id, data } = req.body;

    // Validate input
    if (!rule_id || !data) {
      return res.status(400).json({ message: 'Rule ID and data are required' });
    }

    // Fetch the rule from the database
    const rule = await Rule.findById(rule_id);
    if (!rule) {
      return res.status(404).json({ message: 'Rule not found' });
    }

    // Evaluate the rule using the AST and provided data
    const evaluationResult = evaluateAST(rule.astStructure, data);

    // Respond with the evaluation result
    res.status(200).json({ isValid: evaluationResult });
  } catch (err) {
    console.error("Error in evaluateRule:", err.stack);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to get a rule by ID
const getRule = async (req, res) => {
  try {
    console.log('Request params:', req.params); 
    let { id } = req.params;

    // Trim whitespace characters from the ID
    id = id.trim();

    // Print the received ID for debugging
    console.log(`Received ID: '${id}'`);

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid ID format:', id); // Debugging log
      return res.status(400).json({ message: 'Invalid Rule ID format' });
    }

    // Fetch the rule from the database
    const rule = await Rule.findById(id);
    if (!rule) {
      console.log('Rule not found:', id); // Debugging log
      return res.status(404).json({ message: 'Rule not found' });
    }

    // Return the rule
    res.status(200).json(rule);
  } catch (err) {
    // Print error details for debugging
    console.error("Error in getRule:", err.stack);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to delete a rule by ID
const deleteRule = async (req, res) => {
  try {
    console.log('Request params:', req.params);
    let { id } = req.params;

    // Trim whitespace characters from the ID
    id = id.trim();

    // Print the received ID for debugging
    console.log(`Received ID for deletion: '${id}'`);

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid ID format for deletion:', id); // Debugging log
      return res.status(400).json({ message: 'Invalid Rule ID format' });
    }

    // Delete the rule from the database
    const result = await Rule.findByIdAndDelete(id);
    if (!result) {
      console.log('Rule not found for deletion:', id); // Debugging log
      return res.status(404).json({ message: 'Rule not found' });
    }

    // Return success message
    res.status(200).json({ message: 'Rule successfully deleted' });
    console.log(`Rule is deleted: '${id}'`);
  } catch (err) {
    // Print error details for debugging
    console.error("Error in deleteRule:", err.stack);
    res.status(500).json({ message: 'Server error' });
  }
};

// Route handler for combining rules
const handleCombineRules = async (req, res) => {
  try {
   
    const { rules } = req.body;
    // console.log('Request body:', rules); 
    if (!rules || !Array.isArray(rules)) { 
      console.log('failed');
      return res.status(400).json({ message: 'Invalid rules input' });
    }
    // const astList = rules.map(func);
    const astList = [];
    for (let i = 0; i < rules.length; i++) {
     // console.log(typeof(rules[i]));
    const ast = func(JSON.stringify(rules[i]));
    astList.push(ast);
} 

    console.log(astList) 
    // Combine the ASTs into a single AST 
    const combinedAST = combineRules(astList);
    console.log(combinedAST)  
    // return combinedAST;

    // const combinedAST = await combineRulesService(rules); // Ensure this function is awaited
    res.status(200).json({ combinedAST }); 
  } catch (err) {
    console.error("Error in handleCombineRules:", err.stack);
    res.status(500).json({ message: 'Server error' }); 
  }
};
function func (rule){
   return createRules(rule);
}
function createRules(ruleString){
  const astStructure = createAST(ruleString);

  const newRule = new Rule({
    ruleString: ruleString,
    astStructure: astStructure
  });

  return newRule;
}
module.exports = { createRule, evaluateRule, handleCombineRules, getRule, deleteRule}; 

