import { data } from "../lib/data.ts";

interface ExplainBoxProps {
    topic: number;
}
const ExplainBox = ({ topic }: ExplainBoxProps) => {
    return (
        <>
            <div className=" text-3xl absolute bottom-8 m-5 bg-white p-6 max-w-[50vw] border-16 text-pretty border-yellow-100">
                {data[topic].explanation}
            </div>
        </>
    );
};

export default ExplainBox;
