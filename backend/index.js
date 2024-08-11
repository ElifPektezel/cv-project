const express = require('express');
const app = express();
const port = 5001;

// JSON dosyasını okuyup frontend'e sunmak için bir endpoint oluşturuyoruz.
app.get('/api/data', (req, res) => {
    const data = require('./data.json'); // data.json dosyasındaki bilgileri alıyoruz.
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

