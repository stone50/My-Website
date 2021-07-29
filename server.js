const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.status(200).sendFile('Main.html', {root: 'HTML'});
});

app.get('/about', (req, res) => {
    res.status(200).sendFile('About.html', {root: 'HTML'});
});

app.get('/projects', (req, res) => {
    res.status(200).sendFile('Projects.html', {root: 'HTML'});
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log('Press ctrl + c to stop server');
});