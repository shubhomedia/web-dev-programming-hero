const express = require('express');
const app = express();
const port = process.eventNames.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// User : mydbuser1
// Pass : W6nd6gwVahaYvzeP


const uri = "mongodb+srv://mydbuser1:W6nd6gwVahaYvzeP@cluster0.cibjvck.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const database = client.db("foodMaster");
        const usersCollection = database.collection("user");
        // create a document to insert

        // POST API
        app.post('/users', (req, res) => {
            console.log('Hitting The Post');
            res.send('Hit the post');
        })

    } finally {
        await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running My Server');
})

app.listen(port, () => {
    console.log("Running My Server", port);
})
