const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')

const merchants = {};
[
    'Tim Hortons',
    'Starbucks',
    'EB Games',
    'Esso',
    'TTC',
    'Sobeys',
    'Best Buy',
    'Apple Music'
].forEach((name, index) => merchants[name] = {
    merchant_name: name,
    merchant_id: index
})

const categories = {};
[
    'Restaurants',
    'Entertainment',
    'Fuel & Transportation',
    'Grocery Stores',
    'Electronics',
    'Subscriptions'
].forEach((name, index) => categories[name] = {
    category_name: name,
    category_id: index
})


const transactions= [{
    id: 0,

    ...merchants['Tim Hortons'],
    ...categories['Restaurants'],

    amount: 2.99,
    reflected_as: null
}, {
    id: 1,

    ...merchants['Starbucks'],
    ...categories['Restaurants'],

    amount: 6.99,
    reflected_as: null
}, {
    id: 2,

    ...merchants['EB Games'],
    ...categories['Entertainment'],

    amount: 79.99,
    reflected_as: null
}, {
    id: 3,

    ...merchants['EB Games'],
    ...categories['Entertainment'],

    amount: 2.99,
    reflected_as: null
}, {
    id: 4,

    ...merchants['Esso'],
    ...categories['Fuel & Transportation'],

    amount: 40,
    reflected_as: null
}, {
    id: 5,

    ...merchants['TTC'],
    ...categories['Fuel & Transportation'],

    amount: 124,
    reflected_as: null
}, {
    id: 6,

    ...merchants['Sobeys'],
    ...categories['Grocery Stores'],

    amount: 54.13,
    reflected_as: null
}, {
    id: 7,

    ...merchants['Tim Hortons'],
    ...categories['Restaurants'],

    amount: 2.99,
    reflected_as: null
}, {
    id: 8,

    ...merchants['Best Buy'],
    ...categories['Electronics'],

    amount: 1488.85,
    reflected_as: null
}, {
    id: 9,

    ...merchants['Apple Music'],
    ...categories['Subscriptions'],

    amount: 2.99,
    reflected_as: null
}];

transactions.forEach((transaction, id) => {
    transaction.date_of_transaction = moment().subtract(id + 1, 'days').toISOString()
})

const app = express()

app.use(bodyParser.json())

app.get('/reflections', (req, res) => {
    console.log('REQUEST RECEIVED: GET /reflections')
    res.json({ transactions })
})

app.put('/reflections/:transactionId', (req, res) => {
    try {
        console.log('REQUEST RECEIVED: PUT /reflections/:transactionId')
        console.log('BODY: ', req.body)

        const idToUpdate = req.params.transactionId
        const update = req.body

        transactions[idToUpdate] = {
            ...transactions[idToUpdate],
            ...update
        }

        res.json(transactions[idToUpdate])
    } catch(error) {
        res.status(400).json({
            errorType: error.name,
            errorMessage: error.message,
            errorStack: error.stack
        })
    }
})

const port = 3000
app.listen(port, () => console.log(`ALL SYSTEMS GO! LISTENING ON PORT #${port}\n CTRL+C to exit`))

