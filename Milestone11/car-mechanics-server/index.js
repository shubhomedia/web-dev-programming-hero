const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@car-mechanics.iigjlxr.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('carmechanics');
        const servicesCollection = database.collection('services');

        //POST API
        app.post('/services', async (req, res) => {
            const service = {
                name: "ENGINE DIAGNOSTIC",
                price: "300",
                description: "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
                img: "https://i.ibb.co/dGDkr4v/1.jpg"
            }
            const result = await servicesCollection.insertOne(service);
            console.log(result);
        })
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("Server Running");
})

app.listen(port, () => {
    console.log("Runnig Server On Port", port);
})