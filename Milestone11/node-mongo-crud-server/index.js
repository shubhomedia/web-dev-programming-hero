const express = require('express');
const app = express();
const port = process.eventNames.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// User : mydbuser1
// Pass : W6nd6gwVahaYvzeP


const uri = "mongodb+srv://mydbuser1:<password>@cluster0.cibjvck.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

app.get('/', (req, res) => {
    res.send('Running My Server');
})

app.listen(port, () => {
    console.log("Running My Server", port);
})
