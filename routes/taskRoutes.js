
const express = require('express');
const router = express.Router();

const upload = require('../middleware/uploadMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
} = require('../controllers/taskController.js');

// Protect all task routes
router.use(authMiddleware);

router.post('/', upload.single('image'), createTask);
router.get('/', getTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
