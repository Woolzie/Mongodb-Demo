import { data } from "../lib/data.ts";

interface ExplainBoxProps {
    topic: number;
}
const ExplainBox = ({ topic }: ExplainBoxProps) => {
    return (
        <>
            <div className="explanation">{data[topic].explanation}</div>
        </>
    );
};

export default ExplainBox;
