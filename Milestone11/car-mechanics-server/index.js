const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const ObjectId = require('mongodb').ObjectId;
const port = process.env.PORT || 5000;


//Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@car-mechanics.iigjlxr.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('carmechanics');
        const servicesCollection = database.collection('services');

        // GET API
        app.get('/services', async (req, res) => {
            const cursor = servicesCollection.find({});
            const services = await cursor.toArray();
            res.send(services);
        });

        //GET Single Service 
        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await servicesCollection.findOne(query);
            res.json(service);
        });

        //POST API
        app.post('/services', async (req, res) => {
            const service = req.body;
            console.log('Service Data', service);
            // const service = {
            //     name: "ENGINE DIAGNOSTIC",
            //     price: "300",
            //     description: "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
            //     img: "https://i.ibb.co/dGDkr4v/1.jpg"
            // }
            const result = await servicesCollection.insertOne(service);
            console.log(result);
            console.log('Hitt the Post from Client');
            res.json(result);
        });
        //DELETE API
        app.delete('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await servicesCollection.deleteOne(query);
            res.json(result);
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