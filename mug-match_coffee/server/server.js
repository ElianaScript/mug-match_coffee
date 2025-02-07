import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from './config/database.js'; // Ensure this is correct
import coffeeRoutes from './routes/coffeeRoutes.js'; // Add this line to import the routes

// Ensure correct file path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Access Google API key securely
const googleApiKey = process.env.GOOGLE_API_KEY;

// Debug: Print the loaded DATABASE_URL
console.log("DEBUG: Loaded DATABASE_URL ->", process.env.DATABASE_URL);

// Exit if DATABASE_URL is missing in .env
if (!process.env.DATABASE_URL) {
    console.error("❌ DATABASE_URL is still missing!");
    process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Use coffee routes for handling requests
app.use('/api', coffeeRoutes); // Make sure this is correctly set up

// Debug: Indicate server is running
console.log("✅ server.js file is executing...");

// Test database connection
sequelize.authenticate()
    .then(() => console.log('✅ Database connected successfully'))
    .catch(err => console.error('❌ Database connection failed:', err));

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
