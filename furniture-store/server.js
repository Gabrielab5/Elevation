const express = require('express')
const port = 3000
const app = express()

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 4, price: 1400 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static('dist'));

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send("Server is up and running smoothly")
})

app.get('/priceCheck/:name', function (req, res) {
    const itemName = req.params.name.toLowerCase();
    const item = store.find(i => i.name.toLowerCase() === itemName);
    if (item) {
        res.json({ price: item.price });
    } else {
        res.json({ price: null });
    }
})

app.get('/buy/:name',(req,res) => {
    const itemName = req.params.name.toLowerCase();
    const item = store.find(i => i.name.toLowerCase() === itemName);

    if (item) {
        if (item.inventory > 0) {
            item.inventory--;
            res.json(item);
        } else {
            res.status(400).json({error: "Out of stock" });
        }
    } else {
        res.status(400).json({ error: "Item not found"});
    }
})

app.get('/sale',(req,res) => {
    const isAdmin= req.params.admin === 'true';

    if (isAdmin) {
        store.forEach(item => 
            {if (item.inventory > 10) {
                item.price = item.price / 2;
            }})
    }
    res.send(store);
})