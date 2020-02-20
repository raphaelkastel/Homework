const MongoClient = require('mongodb').MongoClient;

async function callMongo() {
  const client = new MongoClient('mongodb+srv://testUser:test123@cluster0-ahves.mongodb.net/test?retryWrites=true&w=majority');
  try {
    await client.connect();
    // await listDatabases(client);

    const airBnbCollection = client.db('sample_airbnb').collection('listingsAndReviews');

    await findOneListing(airBnbCollection, 'Ribeira Charming Duplex');

  } catch (err) {
    console.error(err);
  }
}

async function asyncForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i], i, array);
  }
}

async function listDatabases(client) {
  const cursor = await client.db().admin().listDatabases();
  //cursor.databases.forEach(async db => {
  asyncForEach(cursor.databases, async db => {
    console.log(`database: ${db.name}`);

    const collections = await client.db(db.name).listCollections().toArray();
    collections.forEach((c, i) => {
      console.log(`     ${String.fromCharCode(i + 97)}) - ${c.name}`);
    });
  });
}

async function findOneListing(collection, name) {
  const result = await collection.findOne({ name: name });
  if (result) {
    console.log(`${result.name} - ${result.summary}`);
  }
}

callMongo().catch(err => console.error(err));