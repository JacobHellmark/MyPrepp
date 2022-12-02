import { MongoClient} from "mongodb";

const dbUrl: string = "mongodb://root:example@172.19.0.2:27017/";


const client = new MongoClient(dbUrl);
client.connect()
const dbName: string = "preppAppdb"
console.log("connected to db")
const db = client.db(dbName)


module.exports = {client: client , db:db};
