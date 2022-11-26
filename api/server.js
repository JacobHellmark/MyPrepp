const express = require("express");
app = express();

app.use(express.json());

const port = 8080;

app.post("/test", (req, res) => {
	console.log("req", req.body);
	res.json({ status: "OK" });
});

app.listen(process.env.PORT || port);
