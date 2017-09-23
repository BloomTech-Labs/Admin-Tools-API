const express = require('express');
const router = express.Router();
const controller = require('./pr.controller')();



// Highly suggest changing this route to include something like 'all';
router.get('/all', controller.getAllPrs);

// Route to get one Pull request by ID
router.get('/:id', controller.getOnePr);

// Highly suggest making this route be what handles the creation of new prs;
router.post('/save', controller.createPr);

// This handles comments on diffs in files from pull requests...
router.post('/handlePrDiffComment', controller.handlePrDiffComment);

// Route to delete all closed PRs
router.delete('/clear', controller.clearClosedPrs); 

// Route to delete one PR by ID
router.delete('/:id', controller.deleteOnePr);

module.exports = router;