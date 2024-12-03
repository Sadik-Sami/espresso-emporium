require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.port || 5000;

// middlewares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3b45u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const coffeeCollection = client.db('coffeeDB').collection('coffee');
    app.get('/coffee', async (req, res) => {
      const allCoffees = await coffeeCollection.find().toArray();
      res.send(allCoffees);
    });
    app.post('/add-coffee', async (req, res) => {
      const coffee = req.body;
      console.log(coffee);
      const result = await coffeeCollection.insertOne(coffee);
      if (!result.acknowledged) {
        res.send({ success: false, message: 'failed to add coffee', data: result });
      }
      res.send({ success: true, message: 'coffee added', data: result });
    });
    app.delete('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.deleteOne(query);
      console.log(result);
      res.send(result);
    });
    app.get('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.findOne(query);
      res.send({ success: true, data: result });
    });
    app.put('/edit-coffee/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCoffee = req.body;
      const coffee = {
        $set: {
          chef: updatedCoffee.chef,
          details: updatedCoffee.details,
          name: updatedCoffee.name,
          photo: updatedCoffee.photo,
          price: updatedCoffee.price,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
        },
      };
      const result = await coffeeCollection.updateOne(filter, coffee, options);
      res.send({ success: true, message: 'Coffee details updated' });
    });
  } finally {
  }
}
run().catch(console.dir);
app.get('/', (req, res) => {
  res.send('coffee is brewing');
});
app.listen(port, () => {
  console.log(`Coffee is brewing on port: ${port}`);
});
