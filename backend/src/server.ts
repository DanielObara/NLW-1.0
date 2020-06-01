import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('oi')
    res.send('Hellow World1')
});

app.listen(3333);
