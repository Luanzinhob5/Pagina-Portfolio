const express = require('express');
const router = express.Router();

const { createProject } = require('../controllers/projectController')

const app = express();

router.post('/', createProject);

module.exports = router;