import { useEffect, useId, useRef } from "react";
import JSONPretty from "react-json-pretty";

interface OutputProps {
    output: string;
    cmd: string;
}

const Output = ({ output, cmd }: OutputProps) => {
    // do not set it to w-fit
    // top should contain the query
    //mt4 is just the min margin
    return (
        <div className=" mt-4 w-[45vw] h-[90vh] bg-white absolute right-8 border-4 border-green-800 overflow-y-scroll text-wrap">
            <div className="bg-lime-50 mb-8 text-xl text-center sticky p-4 md:text-4xl">
                {cmd}
            </div>
            <div className="whitespace-pre-line w-fit ml-4 text-[1.5rem] ">
                <JSONPretty data={output}></JSONPretty>
            </div>
        </div>
    );
};

export default Output;
