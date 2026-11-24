
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

// Security Headers
app.use(helmet());

// Rate Limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: 'Too many requests, please try again later.'
    }
});

// Apply rate limit to API routes
app.use('/api/', apiLimiter);

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('TaskFlow API is running!');
});

// Task Routes
app.use('/api/tasks', require('./routes/taskRoutes'));

// Authentication Routes
app.use('/api/auth', authRoutes);

// Admin Routes
app.use('/api/admin', adminRoutes);

const startServer = async () => {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    // Global Error Handling
    app.use((err, req, res, next) => {
        console.error(err.message);

        res.status(400).json({
            success: false,
            message: err.message || 'Something went wrong'
        });
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
