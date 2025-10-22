import { exec, fork, spawn } from "node:child_process";
import { EventEmitter } from "node:events";

const outputEvent = new EventEmitter();

const dbName = "demo"
const mongo = spawn(
    "mongosh",
    [
        `mongodb://localhost:27017/${dbName}`
    ],
    { stdio: ["pipe", "pipe", "pipe"] },
);

mongo.stderr.on("data", (data) => {
    console.error(data.toString());
});

const reg = /\w*>/g;
// const reg = new RegExp(`${}>`, "g");
console.log(reg)
let firstOutput = true;

mongo.stdout.on("data", (data) => {
    const output = data.toString();
    console.log(output)
    const value = output.replaceAll(reg, "");
    if (!firstOutput) {
        outputEvent.emit("mongo:op", value);
    }
    firstOutput = false;
});

function run(cmd) {
    mongo.stdin.write(`${cmd}\n`);
}

export { outputEvent, run };
