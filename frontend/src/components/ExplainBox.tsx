import { data } from "../lib/data.ts";

interface ExplainBoxProps {
    topic: number;
}
const ExplainBox = ({ topic }: ExplainBoxProps) => {
    return (
        <div className="absolute font-bold bottom-0 bg-white overflow-y-scroll max-w-[48vw] max-h-[50vh] text-pretty border-yellow-400 border-4 p-4 m-8  text-xl lg:text-3xl">
            {data[topic].explanation}
        </div>
    );
};

export default ExplainBox;
