import { MongoClient} from "mongodb";

const dbUrl: string = "mongodb://root:example@172.19.0.2:27017/";

const client = new MongoClient(dbUrl);


module.exports = client;
