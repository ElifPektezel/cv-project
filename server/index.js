const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors()); 

app.get('/api/data', (req, res) => {
    const data = require('./data.json');
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
