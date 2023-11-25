// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from 'express';

const app = express(); 
app.listen(3000, () => console.log('listening at 3000')); // recall, we want to create a web server so that we can use it to listen to requests
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, 'public')));
