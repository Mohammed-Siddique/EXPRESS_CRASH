import express from 'express';
const port = process.env.PORT || 8000;
import posts from './routes/routes.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
import logger from './middleware/logger.js';

const app = express();

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