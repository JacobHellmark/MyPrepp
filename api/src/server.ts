import express, {Request, Response} from "express"
var cors = require("cors")
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

app.listen(process.env.PORT || port);
