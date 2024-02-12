import express from 'express';
import cors from 'cors';
import morgan from'morgan';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res) => {
    res.send('welcome to the API');
})




app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});