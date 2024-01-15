import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import user from './routes/email.route.js';
import products from './routes/product.route.js';
import settings from './routes/setting.route.js';
import imgupload from './routes/image.route.js';
import saleproduct from './routes/sale.route.js';
import query from './routes/query.route.js';
import Cart from './routes/addTocart.route.js';
import path from 'path'; // Import the 'path' module
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: './config.env' });

const app = express();
const PORT = 1213;
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Serve static files from the "upload" directory
// app.use('/upload', express.static(path.join(__dirname, 'upload')));
app.use(express.static("upload"));
app.use('/api', products);
app.use('/api', user);
app.use('/api', settings);
app.use('/api', imgupload);
app.use('/api', saleproduct);
app.use('/api', query);
app.use('/api', Cart);

mongoose
  .connect('mongodb+srv://zultaifhassan110:12345@cluster0.tdrxjpi.mongodb.net/Ibexstore')
  .then(() => {
    console.log('DB Connected');
  });

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`);
});
