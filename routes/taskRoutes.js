const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');
const Task = require('../models/Task');

router.get('/add', TaskController.createTasks);
router.post('/add', TaskController.createTasksSave);
router.post('/remove', TaskController.removeTask);
router.get('/edit/:id', TaskController.updateTask);
router.post('/edit', TaskController.updateTaskPost);
router.post('/updatestatus', TaskController.toggleStatus);
router.get('/', TaskController.showTasks);

module.exports = router;