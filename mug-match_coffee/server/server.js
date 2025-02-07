import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from './config/database.js'; // Ensure this is correct

// Ensure correct file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Debug: Print environment variables
console.log("DEBUG: Loaded DATABASE_URL ->", process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
    console.error("❌ DATABASE_URL is still missing!");
    process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Debug: Indicate that server.js is running
console.log("✅ server.js file is executing...");

// Test Database Connection
sequelize.authenticate()
    .then(() => console.log('✅ Database connected successfully'))
    .catch(err => console.error('❌ Database connection failed:', err));

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
