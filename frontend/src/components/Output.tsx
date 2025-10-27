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
        <div className=" w-[45vw] h-[90vh] bg-white absolute border-green-800 overflow-y-scroll  mt-4 border-4 right-8">
            <div className="bg-lime-50 border-b-2 text-xl w-[44.2%] text-center text-wrap  fixed  p-2 md:text-3xl xl:text-4xl  xl:w-[44.6%]">
                {cmd}
            </div>
            <div className="whitespace-pre-line w-fit mt-32 ml-1 text-xl md:mt-32 lg:ml-2">
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
