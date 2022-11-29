import express, {Request, Response} from "express"
const client = require("./configdb")

var cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors({
	origin: "http://localhost:3000"
}))

const port = 8080;



app.post("/test",(req: Request, res: Response): void => {
	console.log("req", req.body);
	res.json({ status: "OK" });
});


const run = async (): Promise<void> => {
	await client.connect()
	console.log("connected to db")
	const dbName: string = "preppAppdb"
	const db = client.db("preppAppdb")
	app.listen(process.env.PORT || port);
	const collection = db.collection('documents');
	console.log(collection)

}

run()