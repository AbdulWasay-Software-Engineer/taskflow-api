const Task = require('../models/Task');
const upload = require('../middleware/uploadMiddleware');

// CREATE TASK

const createTask = async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Task title is required'
            });
        }

        const task = await Task.create({
            title,
            description,
            status,
            dueDate,
            user: req.user.id,
            image: req.file ? `/uploads/${req.file.filename}` : ''
        });

        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: task
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// GET ALL TASKS WITH PAGINATION & SEARCH
const getTasks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const search = req.query.search || '';

        const filter = search
            ? { title: { $regex: search, $options: 'i' } }
            : {};

        const tasks = await Task.find(filter)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        const totalTasks = await Task.countDocuments(filter);

        res.status(200).json({
            success: true,
            currentPage: page,
            totalPages: Math.ceil(totalTasks / limit),
            totalTasks,
            data: tasks
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET SINGLE TASK
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        res.status(200).json({
            success: true,
            data: task
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// UPDATE TASK
const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        if (
            req.user.role !== 'admin' &&
            task.user.toString() !== req.user.id
        ) {
            return res.status(403).json({
                success: false,
                message: 'You can only update your own tasks'
            });
        }

       const { title, description, status, dueDate } = req.body;

if (title !== undefined) task.title = title;
if (description !== undefined) task.description = description;
if (status !== undefined) task.status = status;
if (dueDate !== undefined) task.dueDate = dueDate;

await task.save();
        await task.save();

        res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            data: task
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE TASK
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        if (
            req.user.role !== 'admin' &&
            (!task.user || task.user.toString() !== req.user.id)
        ) {
            return res.status(403).json({
                success: false,
                message: 'You can only delete your own tasks'
            });
        }

        await task.deleteOne();

        res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};