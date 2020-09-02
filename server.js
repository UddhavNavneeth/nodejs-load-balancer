const express = require('express');

const app = express();
const port = process.argv[2] || process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Hello from port ${port}`);
    console.log(`Hello from port ${port}`);
});

app.listen(port, () => {
    console.log(`server is up on port ${port}`);
})

