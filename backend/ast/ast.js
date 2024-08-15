/* class Node {
    constructor(type, left = null, right = null, value = null) {
      this.type = type;
      this.left = left;
      this.right = right;
      this.value = value;
    }
  }
  
  const parseCondition = (condition) => {
    const match = condition.match(/(\w+)\s*([<>=!]+)\s*(\d+|'[\w\s]+')/);
    if (!match) throw new Error(`Invalid condition: ${condition}`);
    return match.slice(1);
  };
  
  const createRule = (ruleString) => {
    const tokens = ruleString.split(/(AND|OR)/).map(token => token.trim()); 
    const nodeStack = [];
    const operatorStack = [];
  
    tokens.forEach(token => {
      if (token === 'AND' || token === 'OR') {
        operatorStack.push(token);
      } else {
        const condition = parseCondition(token);
        nodeStack.push(new Node('operand', null, null, condition));
      }
  
      if (operatorStack.length && nodeStack.length >= 2) {
        const right = nodeStack.pop();
        const left = nodeStack.pop();
        const operator = operatorStack.pop();
        nodeStack.push(new Node('operator', left, right, operator));
      }
    });
  
    return nodeStack.pop();
  };
  
  const combineRules = (ruleAsts) => {
    if (!ruleAsts.length) return null;
    return ruleAsts.reduce((combinedAst, ast) => new Node('operator', combinedAst, ast, 'AND'));
  };
  
  const evaluateCondition = (condition, data) => {
    const [field, operator, value] = condition;
    const dataValue = data[field];
    const compareValue = isNaN(value) ? value.replace(/'/g, '') : parseInt(value, 10);
  
    switch (operator) {
      case '>': return dataValue > compareValue;
      case '<': return dataValue < compareValue;
      case '>=': return dataValue >= compareValue;
      case '<=': return dataValue <= compareValue;
      case '==': return dataValue == compareValue;
      case '!=': return dataValue != compareValue;
      default: throw new Error(`Invalid operator: ${operator}`);
    }
  };
  
  const evaluateRule = (node, data) => {
    if (node.type === 'operator') {
      const leftVal = evaluateRule(node.left, data);
      const rightVal = evaluateRule(node.right, data);
      return node.value === 'AND' ? leftVal && rightVal : leftVal || rightVal;
    } else {
      return evaluateCondition(node.value, data);
    }
  };


  
  module.exports = { Node, createRule, combineRules, evaluateRule }; */ 

  class Node {
    constructor(type, left = null, right = null, value = null) {
      this.type = type;
      this.left = left;
      this.right = right;
      this.value = value;
    }
  }
  
  const parseCondition = (condition) => {
    const match = condition.match(/(\w+)\s*([<>=!]+)\s*(\d+|'[\w\s]+')/);
    if (!match) throw new Error(`Invalid condition: ${condition}`);
    return match.slice(1);
  };
  
  const createAST = (ruleString) => {
    // Parse the JSON string
    const parsedRule = JSON.parse(ruleString);
    const condition = parsedRule.condition;
  
    // Tokenize the condition
    const tokens = condition.split(/(AND|OR)/).map(token => token.trim());
    const nodeStack = [];
    const operatorStack = []; 
  
    // Construct the AST
    tokens.forEach(token => {
      if (token === 'AND' || token === 'OR') {
        operatorStack.push(token);
      } else {
        const conditionParts = parseCondition(token);
        nodeStack.push(new Node('operand', null, null, conditionParts));
      }
  
      if (operatorStack.length && nodeStack.length >= 2) {
        const right = nodeStack.pop();
        const left = nodeStack.pop();
        const operator = operatorStack.pop();
        nodeStack.push(new Node('operator', left, right, operator));
      }
    });
  
    return nodeStack.pop(); 
  };

  const evaluateCondition = (conditionParts, data) => {
    const [field, operator, value] = conditionParts;
  
    const fieldValue = data[field];
    const comparisonValue = value.startsWith("'") ? value.slice(1, -1) : parseInt(value, 10);
  
    switch (operator) {
      case '>': return fieldValue > comparisonValue;
      case '<': return fieldValue < comparisonValue;
      case '>=': return fieldValue >= comparisonValue;
      case '<=': return fieldValue <= comparisonValue;
      case '==': return fieldValue === comparisonValue;
      case '!=': return fieldValue !== comparisonValue;
      default: throw new Error(`Unknown operator: ${operator}`);
    }
  };
  
  // Function to evaluate the AST
  const evaluateAST = (ast, data) => {
    if (ast.type === 'operand') {
      return evaluateCondition(ast.value, data);
    } else if (ast.type === 'operator') {
      const leftValue = evaluateAST(ast.left, data);
      const rightValue = evaluateAST(ast.right, data); 
  
      switch (ast.value) {
        case 'AND': return leftValue && rightValue;
        case 'OR': return leftValue || rightValue;
        default: throw new Error(`Unknown operator in AST: ${ast.value}`);
      }
    }
  };

  const combineRules = (rules) => {
    if (rules.length === 0) return null;
    if (rules.length === 1) return createAST(rules[0]);

    /* const combinedAST = rules.reduce((combined, ruleString) => {
        const newAST = createAST(ruleString);
        if (!combined) return newAST;

        return new Node('operator', combined, newAST, 'AND');
    }, null); */

    let combinedAST = null;

for (let i = 0; i < rules.length; i++) {
    const ruleString = rules[i].ruleString;
    const newAST = createAST(ruleString);

    if (!combinedAST) {
        combinedAST = newAST;
    } else {
        combinedAST = new Node('operator', combinedAST, newAST, 'AND');
    }
}


    return combinedAST;
};
  
  module.exports = { createAST,evaluateAST, combineRules}; 
  
  