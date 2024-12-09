const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.redirect('https://drive.google.com');
});

app.get('/:id', (req, res) => {
    var id = req.path
    if (id.startsWith('/')) id = id.slice(1)
    if (id.includes('/')) id = id.split('/')[0]
    
    res.redirect(`https://drive.google.com/open?id=${id}`);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});