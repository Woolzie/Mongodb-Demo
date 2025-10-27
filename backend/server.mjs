import cors from "cors";
import express from "express";
import { getData } from "./promise.mjs";

const port = 3000;
const app = express();
app.use(express.json());

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin) return callback(null, true);
            if (/^http:\/\/localhost:/.test(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
    }),
);

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
