const express = require('express');
const router = express.Router();
const controller = require('./pr.controller')();



// Highly suggest changing this route to include something like 'all';
router.get('/pull-requests/all', controller.getAllPrs);

// Route to get one Pull request by ID
router.get('/pull-requests/:id', controller.getOnePr);

// Highly suggest making this route be what handles the creation of new prs;
router.post('/pull-requests/save', controller.createPr);

// This handles comments on diffs in files from pull requests...
router.post('/pull-requests/handlePrDiffComment', controller.handlePrDiffComment);

// Route to delete all closed PRs
router.delete('/pull-requests/clear', controller.clearClosedPrs); 

// Route to delete one PR by ID
router.delete('/pull-requests/:id', controller.deleteOnePr);

module.exports = router;