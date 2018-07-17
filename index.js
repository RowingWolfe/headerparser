const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res, next) => {
    res.send({
        'Test': 'Working',
        'message': 'MY EYES! THE ROOT URL DOES NOTHING!'
    });
    console.log(req.headers);
});

app.get('/api/whoami', (req,res,next) => {
    const software = req.headers['user-agent'];
    const lang = req.headers['accept-language'];
    const ip = req.connection.remoteAddress;
    res.send({
        'software': software,
        'language': lang,
        'ip': ip
    })
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));