interface OutputProps {
    output: string;
}

const Output = ({ output }: OutputProps) => {
    return (
        <>
            <div className="output">{output}</div>
        </>
    );
};

export default Output;
