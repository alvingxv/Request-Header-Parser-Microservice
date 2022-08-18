const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get("/api/whoami", (req, res) => {
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    })
});

app.listen(3000, () => {
    console.log('listening on port 3000');
    console.log('http://localhost:3000');
}
);
