```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('<database>');
    const collection = database.collection('<collection>');

    // Incorrect Update Operation
    const result = await collection.updateOne({ name: 'John Doe' }, { $inc: { age: 1000000000000000000000000000 } }); 

    console.log(`Modified ${result.modifiedCount} documents`);
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```