const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://ankitkushwah9813:iTuHIwvpxtKY3uai@namastenode.mcpb4.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // the following code examples can be pasted here...
  // const data = {
  //   firstname: "Deepika",
  //   lastname: "Padukone",
  //   city: "Mumbai",
  //   phoneNumber: "8305559624",
  // };

  // const inserResult = await collection.insertMany([data]);
  // // Read
  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  // const countResult = await collection.countDocuments({});
  // console.log(countResult);
  const result = await collection.find({ firstname: "Deepika" }).toArray();
  console.log(result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

//NOTES

//Go to mongodb website
//create a free M0 cluster
// Create User
// Get The Connection string
// Install Mongo DB compass
