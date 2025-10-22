import { useEffect, useState } from "react";
import { data } from "../lib/data.ts";

interface InputProps {
    cmd: string;
    setCmd: React.Dispatch<React.SetStateAction<string>>;
    setOutput: React.Dispatch<React.SetStateAction<string>>;
    setTopic: React.Dispatch<React.SetStateAction<number>>;
}

const Input = ({ cmd, setCmd, setOutput, setTopic }: InputProps) => {
    const [input, setInput] = useState("");

    useEffect(() => {
        async function runCommand() {
            const res = await fetch("http://localhost:3000/data", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: cmd }),
            });
            console.log("command was sent");
            const { output } = await res.json();
            setOutput(output);
        }
        if (cmd !== "") {
            runCommand();
        }
    }, [cmd, setOutput]);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCmd(input); //should run the command
    };
    const click = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setInput(e.currentTarget.value);
        setTopic(Number(e.currentTarget.getAttribute("index")) || 0);
    };
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInput(e.currentTarget.value);
    };
    return (
        <>
            <div className="inputBox">
                <form onSubmit={submit}>
                    <input
                        type="text"
                        name="cmd"
                        onChange={change}
                        value={input}
                    />
                    <button type="submit"></button>
                </form>
            </div>
            <div className="examples">
                {data.map((ex, index) => (
                    <button
                        key={crypto.randomUUID()}
                        type="button"
                        onClick={click}
                        value={ex.query}
                        index={index}
                    >
                        {ex.type}: {ex.query}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Input;
