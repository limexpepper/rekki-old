import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from 'express';

const app = express(); 
app.listen(3001, () => console.log('listening at 3001')); // recall, we want to create a web server so that we can use it to listen to requests
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, 'public')));
