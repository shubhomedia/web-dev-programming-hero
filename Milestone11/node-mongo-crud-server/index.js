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
        const database = client.db("insertDB");
        const usersCollection = database.collection("data");
        // create a document to insert
        const doc = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }
        const result = await usersCollection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
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
