
/* const express = require('express');
const router = express.Router();
const ruleController = require('../controllers/ruleController');
// import express from 'express';
// import { handleCombineRules } from '../controllers/ruleController';

// Define the route to create a rule
router.post('/create', ruleController.createRule); 
router.post('/evaluate', ruleController.evaluateRule);
router.get('/:id', ruleController.getRule); 
router.delete('/:id', ruleController.deleteRule); 
// router.put('/:id', ruleController.updateRule);

import express from 'express';
import { handleCombineRules } from '../controllers/ruleController';

// Route to combine rules
router.post('/combine', handleCombineRules);
export default router;
// module.exports = router;   */

const express = require('express');
const router = express.Router();
const ruleController = require('../controllers/ruleController');

// Define the route to create a rule
router.post('/create', ruleController.createRule);
router.post('/evaluate', ruleController.evaluateRule);
router.get('/:id', ruleController.getRule);
router.delete('/:id', ruleController.deleteRule);

// Route to combine rules
router.post('/combine', ruleController.handleCombineRules); 

module.exports = router; 


/* const express = require('express');
const router = express.Router();
const { createRule, evaluateRule } = require('../controllers/ruleController');

router.post('/create', createRule); // Corrected route
router.post('/evaluate', evaluateRule);

module.exports = router; */ 
