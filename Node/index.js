import express from 'express';

const PORT = 1234;

const app = express();

app.listen(PORT, () => comsole.log(`Server listening: ${Port}`));

app.use(express.static('Frontend/index'));