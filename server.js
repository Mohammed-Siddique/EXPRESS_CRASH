import express from 'express';
const port = process.env.PORT || 8000;
import posts from './routes/routes.js';
import path, { dirname } from 'path';
import url from 'url';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import logger from './middleware/logger.js';

const app = express();


//Setting up static folder
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

//JSON body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Logger middleware
app.use(logger);

app.use('/api/posts', posts);

//Error handler middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));