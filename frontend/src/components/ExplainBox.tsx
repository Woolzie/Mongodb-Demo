import { data } from "../lib/data.ts";

interface ExplainBoxProps {
    topic: number;
}
const ExplainBox = ({ topic }: ExplainBoxProps) => {
    return (
        <div className="  absolute bottom-0 m-5 bg-white p-6 max-w-[50vw] overflow-y-scroll border-16 text-pretty border-yellow-500 font-bold max-h-[40vh] xl:text-2xl 2xl:text-4xl">
            {data[topic].explanation}
        </div>
    );
};

export default ExplainBox;
