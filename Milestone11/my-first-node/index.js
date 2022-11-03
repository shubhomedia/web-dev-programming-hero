const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// const handler = (req, res) => {
//     res.send("Hello From Node");
// }
app.use(cors());
app.use(express.json());
const users = [
    { id: 0, name: 'jamal', email: 'jamal@gmail.com', phone: '01722092395' },
    { id: 1, name: 'kamal', email: 'kamal@gmail.com', phone: '01722092395' },
    { id: 2, name: 'rony', email: 'rony@gmail.com', phone: '01722092395' },
    { id: 3, name: 'jony', email: 'jony@gmail.com', phone: '01722092395' },
    { id: 4, name: 'rana', email: 'rana@gmail.com', phone: '01722092395' },
    { id: 5, name: 'kana', email: 'kana@gmail.com', phone: '01722092395' }
]

app.get('/', (req, res) => {
    res.send("Hello From Node js");
});

app.post('/users', (req, res) => {

    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('post hitted', req.body);
    // res.send('Post got hitted');
    res.json(newUser);
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})
app.listen(port, () => {
    console.log('Listing to Port', port);
});