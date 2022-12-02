import express, {Router, Request, Response} from "express"
var router: Router = express.Router();
const {db} = require("../configdb")

var cors = require("cors");

router.use(cors({
	origin: "http://localhost:3000"
}))

type User = {
    email: string,
    password: string
}

router.post("/signup", async (req: Request, res: Response) => {
    const userInfo = req.body as User
    
    

   /*  db.collection("Users").insertOne(userInfo, (err: unknown, res: unknown) => {
        console.log("hej")
    }) */
    res.json({userStatus:"account created"});
})


module.exports = router;
