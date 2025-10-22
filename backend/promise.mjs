import { outputEvent, run } from "./event.mjs";

const getData = (cmd) => {
    return new Promise((resolve, reject) => {
        //QUESTION: should i have run below the event listener?
        outputEvent.on("mongo:op", (data) => {
            resolve(data);
        });
        run(cmd);
        setTimeout(() => {
            reject("took too long");
        }, 9000);
    });
};

export { getData };
