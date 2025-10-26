import { useEffect, useState } from "react";
import { data } from "../lib/data.ts";

interface InputProps {
    cmd: string;
    setCmd: React.Dispatch<React.SetStateAction<string>>;
    setOutput: React.Dispatch<React.SetStateAction<string>>;
    setTopic: React.Dispatch<React.SetStateAction<number>>;
}
//TODO: make the input box responsive

const Input = ({ cmd, setCmd, setOutput, setTopic }: InputProps) => {
    const [input, setInput] = useState("");
    const [isClicked, setClicked] = useState("");

    useEffect(() => {
        async function runCommand() {
            const res = await fetch("http://localhost:3000/data", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: cmd }),
            });
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
        setCmd(e.currentTarget.value);
        setClicked(e.currentTarget.id);
        setInput(e.currentTarget.value);
        setTopic(Number(e.currentTarget.getAttribute("index")) || 0);
    };
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInput(e.currentTarget.value);
    };
    // replace heart with leaf
    return (
        <>
            <div className="  w-fit border-4 border-green-500 m-[3rem] flex flex-row text-[2rem] rounded-xl ">
                <form onSubmit={submit}>
                    <input
                        type="text"
                        name="cmd"
                        onChange={change}
                        value={input}
                        className="bg-white  h-[3.5rem] resize-x overflow-x-auto w-[42vw] rounded-xl pl-2"
                    />
                    <button
                        className="text-white px-4 bg-green-500  h-full   hover:text-lime-100"
                        type="submit"
                    >
                        ☘︎
                    </button>
                </form>
            </div>
            <div className="flex flex-col ml-[4rem] gap-4 max-h-[35vh]">
                {data.map((ex, index) => (
                    <button
                        // please fix radius
                        className="bg-white  w-fit p-4  text-xl rounded-xl border-stone-800 border-2  hover:bg-lime-500 hover:text-white hover:border-white"
                        key={crypto.randomUUID()}
                        id={index.toString()}
                        type="button"
                        onClick={click}
                        value={ex.query}
                        index={index}
                        style={{
                            backgroundColor: (isClicked === index.toString())
                                ? "oklch(69.6% 0.17 162.48)"
                                : "",
                        }}
                    >
                        {ex.query}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Input;
