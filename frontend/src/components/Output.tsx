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
        <div className=" w-[45vw] h-[90vh] bg-white absolute border-green-800 overflow-y-scroll text-wrap mt-4 border-4 right-8">
            <div className="bg-lime-50  mb-8 text-xl text-center sticky p-4 lg:text-2xl">
                {cmd}
            </div>
            <div className="whitespace-pre-line w-fit ml-1 text-xl lg:ml-2 ">
                <JSONPretty
                    keyStyle="color:green"
                    valueStyle="color:blue"
                    stringStyle="color:#000080"
                    data={output}
                >
                </JSONPretty>
            </div>
        </div>
    );
};

export default Output;
