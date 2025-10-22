import cors from "cors";
import express from "express";
import { getData } from "./promise.mjs";

const port = 3000;
const app = express();
app.use(express.json());

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin) return callback(null, true); // allow Postman, curl, etc.

            // Check if origin matches localhost (any port)
            if (/^http:\/\/localhost:\d+$/.test(origin)) {
                callback(null, true); // allow
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true, // allow cookies/auth headers if needed
    }),
);
app.get("/*name", (req, res) => {
    //wtf it doesnt even show name tho?
    const url = `${req.originalUrl}`.slice(1).replaceAll("%20", " ");
    console.log(`the url is ${url}`);
    res.send(`<p>${url}</p>`);
});

//TODO: combine run and output into a promise
app.post("/data", (req, res) => {
    const { data } = req.body;
    if (!data) return res.status(404).send({ error: "no data provided" });
    console.log(data);
    getData(data).then((value) => res.json({ output: value }));
});

app.listen(port, () => {
    console.log(`general bungie listening to captain mungie at ${port}`);
});
