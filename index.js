import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('APP IS RUNNING');
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})