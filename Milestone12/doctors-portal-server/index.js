const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;



//MiddleWare
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@doctors-portal.nsyprh7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        const database = client.db('doctors_portal');
        const appointmentsCollection = database.collection('appointments');

        app.get('/appointments', async (req, res) => {
            const email = req.query.email;
            const date = new Date(req.query.date).toLocaleDateString();

            const query = { email: email, date: date }

            const cursor = appointmentsCollection.find(query);
            const appointments = await cursor.toArray();
            res.json(appointments);
        })


        app.post('/appointments', async (req, res) => {
            const appointment = req.body;
            const result = await appointmentsCollection.insertOne(appointment);
            console.log(result);
            res.json(result)
        });

    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Server Is Running ');
})


app.listen(port, () => {
    console.log('Server Running At Port:', port);
})





// app.get('/users')
// app.post('/users')
// app.get('/users/:id')
// app.put('/users/:id')
// app.delete('/users/:id')
// // Users : Get
// // Users : Post