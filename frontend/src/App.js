/* import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [ruleString, setRuleString] = useState('');
  const [evaluationData, setEvaluationData] = useState({});
  const [ruleId, setRuleId] = useState('');
  const [combinedRules, setCombinedRules] = useState([]);
  const [result, setResult] = useState('');

  const handleCreateRule = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rules/create', { rule_string: ruleString });
      setResult(`Rule Created: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error("Error creating rule:", error);
      setResult('Error creating rule');
    }
  };

  const handleEvaluateRule = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rules/evaluate', { rule_id: ruleId, data: evaluationData });
      setResult(`Evaluation Result: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error("Error evaluating rule:", error);
      setResult('Error evaluating rule');
    }
  };

  const handleCombineRules = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rules/combine', { rules: combinedRules });
      setResult(`Combined AST: ${JSON.stringify(response.data.combinedAST)}`);
    } catch (error) {
      console.error("Error combining rules:", error);
      setResult('Error combining rules');
    }
  };

  return (
    <div>
      <h1>Rule Engine</h1>
      
      <h2>Create Rule</h2>
      <textarea value={ruleString} onChange={(e) => setRuleString(e.target.value)} placeholder="Enter rule string" />
      <button onClick={handleCreateRule}>Create Rule</button>
      
      <h2>Evaluate Rule</h2>
      <input type="text" value={ruleId} onChange={(e) => setRuleId(e.target.value)} placeholder="Enter rule ID" />
      <textarea value={JSON.stringify(evaluationData)} onChange={(e) => setEvaluationData(JSON.parse(e.target.value))} placeholder="Enter evaluation data (JSON)" />
      <button onClick={handleEvaluateRule}>Evaluate Rule</button>
      
      <h2>Combine Rules</h2>
      <textarea value={JSON.stringify(combinedRules)} onChange={(e) => setCombinedRules(JSON.parse(e.target.value))} placeholder="Enter rules to combine (JSON array)" />
      <button onClick={handleCombineRules}>Combine Rules</button>

      <h2>Result</h2>
      <pre>{result}</pre>
    </div>
  );
}

export default App;  */

 /* import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the new CSS file

function App() {
  const [ruleString, setRuleString] = useState('');
  const [evaluationData, setEvaluationData] = useState({});
  const [ruleId, setRuleId] = useState('');
  const [combinedRules, setCombinedRules] = useState([]);
  const [result, setResult] = useState('');

  const handleCreateRule = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rules/create', { rule_string: ruleString });
      setResult(`Rule Created: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error("Error creating rule:", error);
      setResult('Error creating rule');
    }
  };



  const handleEvaluateRule = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rules/evaluate', { rule_id: ruleId, data: evaluationData });
      setResult(`Evaluation Result: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error("Error evaluating rule:", error);
      setResult('Error evaluating rule');
    }
  };

  const handleCombineRules = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rules/combine', { rules: combinedRules });
      setResult(`Combined AST: ${JSON.stringify(response.data.combinedAST)}`);
    } catch (error) {
      console.error("Error combining rules:", error);
      setResult('Error combining rules');
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">RULE ENGINE</h1>
      
      <div className="section">
        <h2>Create Rule</h2>
        <textarea className="input-area" value={ruleString} onChange={(e) => setRuleString(e.target.value)} placeholder="Enter rule string" />
        <button className="action-button" onClick={handleCreateRule}>Create Rule</button>
      </div>
      
      <div className="section">
        <h2>Evaluate Rule</h2>
        <input className="input-area" type="text" value={ruleId} onChange={(e) => setRuleId(e.target.value)} placeholder="Enter rule ID" />
        <textarea className="input-area" value={JSON.stringify(evaluationData)} onChange={(e) => setEvaluationData(JSON.parse(e.target.value))} placeholder="Enter evaluation data (JSON)" />
        <button className="action-button" onClick={handleEvaluateRule}>Evaluate Rule</button>
      </div>
      
      <div className="section">
        <h2>Combine Rules</h2>
        <textarea className="input-area" value={JSON.stringify(combinedRules)} onChange={(e) => setCombinedRules(JSON.parse(e.target.value))} placeholder="Enter rules to combine (JSON array)" />
        <button className="action-button" onClick={handleCombineRules}>Combine Rules</button>
      </div>

      <h2>Result</h2>
      <pre className="result-area">{result}</pre>
    </div>
  );
}

export default App;  */ 

import React, { useState } from 'react'; 
import axios from 'axios';
import './App.css'; // Import the new CSS file

function App() {
  const [ruleString, setRuleString] = useState('');
  const [evaluationData, setEvaluationData] = useState({});
  const [ruleId, setRuleId] = useState('');
  const [combinedRules, setCombinedRules] = useState([]);
  const [result, setResult] = useState('');

 /* const handleCreateRule = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rules/create', { rule_string: ruleString });
      setResult(`Rule Created: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error("Error creating rule:", error); 
      setResult('Error creating rule');
    }
  }; */ 

  const handleCreateRule = async () => {
    try { 
      
      const response = await axios.post('http://localhost:5000/api/rules/create', { rule_string: {ruleString:ruleString} }); await 
      console.log(JSON.stringify(response))
      setResult(`Rule Created: ${JSON.stringify(response.data)}`); 
    } catch (error) {
      console.error("Error creating rule:", error.response ? error.response.data : error.message);
      setResult(`Error creating rule: ${error.response ? error.response.data.error : error.message}`);
    } 
  }; 
  

  const handleEvaluateRule = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rules/evaluate', { rule_id: ruleId, data: evaluationData });
      setResult(`Evaluation Result: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error("Error evaluating rule:", error);
      setResult('Error evaluating rule'); 
    }
  };

  const handleCombineRules = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rules/combine', { rules: combinedRules });
      setResult(`Combined AST: ${JSON.stringify(response.data.combinedAST)}`);
    } catch (error) {
      console.error("Error combining rules:", error);
      setResult('Error combining rules'); 
    }
  };

  // New functions to handle JSON parsing errors
  const handleEvaluationDataChange = (e) => {
    try {
      setEvaluationData(JSON.parse(e.target.value));
    } catch (error) {
      console.error("Invalid JSON input:", error);
    }
  };

  const handleCombinedRulesChange = (e) => {
    try {
      setCombinedRules(JSON.parse(e.target.value));
    } catch (error) {
      console.error("Invalid JSON input:", error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">RULE ENGINE</h1>
      
      <div className="section">
        <h2>Create Rule</h2>
        <textarea className="input-area" value={ruleString} onChange={(e) => setRuleString(e.target.value)} placeholder="Enter rule string" />
        <button className="action-button" onClick={handleCreateRule}>Create Rule</button>
      </div>
      
      <div className="section">
        <h2>Evaluate Rule</h2>
        <input className="input-area" type="text" value={ruleId} onChange={(e) => setRuleId(e.target.value)} placeholder="Enter rule ID" />
        <textarea
          className="input-area"
          // value={JSON.stringify(evaluationData)}
          onChange={handleEvaluationDataChange}
          placeholder="Enter evaluation data (JSON)"
        />
        <button className="action-button" onClick={handleEvaluateRule}>Evaluate Rule</button>
      </div>
      
      <div className="section">
        <h2>Combine Rules</h2>
        <textarea
          className="input-area"
          // value={JSON.stringify(combinedRules)}
          onChange={handleCombinedRulesChange}
          placeholder="Enter rules to combine (JSON array)"
        />
        <button className="action-button" onClick={handleCombineRules}>Combine Rules</button>
      </div>

      <h2>Result</h2>
      <pre className="result-area">{result}</pre>
    </div>
  );
}

export default App;


