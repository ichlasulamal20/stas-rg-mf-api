import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import dotenv from 'dotenv';
import cors from 'cors'; 
import routerDev from './routes/index.js'; 
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const databaseUrl = process.env.DATABASE_URL;

// Middleware
app.use(logger('dev')); // Logging request details
app.use(methodOverride('_method')); // Support for method override
app.use(cookieParser()); // Parsing cookies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads
app.use(express.json()); // Parse JSON payloads

// Configure CORS
const corsOptions = {
  origin: 'https://mfapp-ten.vercel.app', // Ganti dengan domain web Flutter Anda
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Jika menggunakan cookie atau authorization
};

app.use(cors(corsOptions)); // Gunakan middleware CORS
app.options('*', cors(corsOptions)); // Tangani preflight request OPTIONS

// Middleware to ensure all requests are JSON
app.use((req, res, next) => {
  if (req.headers['content-type']?.includes('application/json')) {
    req.headers['content-type'] = 'application/json';
  }
  next();
});


// Debugging middleware for incoming requests
app.use((req, res, next) => {
  console.log('Headers:', req.headers);
  console.log('Raw Body:', req.rawBody); // Gunakan middleware untuk membaca raw body jika diperlukan
  console.log('Parsed Body:', req.body);
  next();
});

app.use(express.json({
  verify: (req, res, buf) => {
    req.rawBody = buf.toString(); // Simpan body mentah
  }
}));


// Root route
app.get('/', (req, res) => {
  console.log("Root route hit");
  res.send('Hello Main Route. Pergi ke /api/{sensor} jika ingin mengakses konten Modern Farming');
});

// API routes
app.use('/api', routerDev);
// app.get('/docs', function(req, res) {
//   return res.sendFile('/home/sul/data/code/express/mf-latest/modernfarming-api/docs/index.html')
// })

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'docs')));

app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, '/docs/index.html'));
});

// Handle errors (optional middleware)
app.use((err, req, res, next) => {
  console.error('Error occurred:', err);
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

// Start server only in development mode
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

// Export for production environments (e.g., Railway or Vercel)
export default app;
