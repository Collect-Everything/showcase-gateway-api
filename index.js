import dotenv from 'dotenv';
import express from 'express';
import router from './routes.js';

dotenv.config({path:'./.env'})

const app = express();
const port = process.env.PORT;

app.use(express.json(), router);

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})