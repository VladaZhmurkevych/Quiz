const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/api/quiz', Controller.quiz.getQuiz);

module.exports = router;
