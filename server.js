import express from 'express';
const port = process.env.PORT || 8000;
import posts from './routes/routes.js';

const app = express();

//JSON body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/posts', posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));