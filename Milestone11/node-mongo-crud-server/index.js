const express = require('express');
const app = express();
const port = process.eventNames.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

// User : mydbuser1
// Pass : W6nd6gwVahaYvzeP

//Middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://mydbuser1:W6nd6gwVahaYvzeP@cluster0.cibjvck.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const database = client.db("foodMaster");
        const usersCollection = database.collection("user");
        // create a document to insert

        // POST API
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            console.log('Hitting The Post', req.body);
            console.log('Added New User', result);
            res.json(result);
        })

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Running My Server');
})

app.listen(port, () => {
    console.log("Running My Server", port);
})
