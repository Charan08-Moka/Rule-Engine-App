
const { createAST, evaluateAST, combineRules} = require('../ast/ast');
const {createRule, evaluateRule} = require('../controllers/ruleController'); 
// Function to create a rule and return the corresponding AST
const createRuleService = async (ruleString) => {
    try {
        const ast = createRule(ruleString);
        return ast;
    } catch (err) { 
        console.error("Error in createRuleService:", err.stack);
        throw new Error('Error creating rule');
    }
};

// Function to combine multiple rules into a single AST
const combineRulesService = async (ruleStrings) => {
    try {
        // Convert each rule string into an AST
        const astList = ruleStrings.map(ruleString => createRule(ruleString));
        console.log(astList) 
        // Combine the ASTs into a single AST
        const combinedAST = combineRules(astList);
        console.log(combineAST)  
        return combinedAST; 
    } catch (err) {
        console.error("Error in combineRulesService:", err.stack);
        throw new Error('Error combining rules');
    }
}; 

// Function to evaluate a rule (represented as an AST) against provided data
const evaluateRuleService = async (ast, data) => {
    try {
        const result = evaluateRule(ast, data);
        return result;
    } catch (err) {
        console.error("Error in evaluateRuleService:", err.stack);
        throw new Error('Error evaluating rule');
    }
};

module.exports = {
    createRuleService,
    combineRulesService,
    evaluateRuleService
};

