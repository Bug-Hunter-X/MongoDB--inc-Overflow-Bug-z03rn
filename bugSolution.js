```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('<database>');
    const collection = database.collection('<collection>');

    // Correct Update Operation using smaller increments
    const result = await collection.updateOne({ name: 'John Doe' }, { $inc: { age: 1 } }); 

    //Alternative approach - using $set
    //const result = await collection.updateOne({ name: 'John Doe' }, {$set: {age: currentAge + 1}});

    console.log(`Modified ${result.modifiedCount} documents`);
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```