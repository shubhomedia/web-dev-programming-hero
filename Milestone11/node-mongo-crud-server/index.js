const express = require('express');
const app = express();
const port = process.eventNames.PORT || 5000;


// User : mydbuser1
// Pass : W6nd6gwVahaYvzeP
app.get('/', (req, res) => {
    res.send('Running My Server');
})

app.listen(port, () => {
    console.log("Running My Server", port);
})