import express from 'express';

const PORT = 1234;

const app = express();

app.listen(PORT, ()=> console.log(`Server listening: ${PORT}`));

app.use(express.static('Frontend/index'));