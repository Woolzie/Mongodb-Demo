import { useEffect, useRef, useState } from "react";
import { data } from "../lib/data.ts";

interface InputProps {
    cmd: string;
    setCmd: React.Dispatch<React.SetStateAction<string>>;
    setOutput: React.Dispatch<React.SetStateAction<string>>;
    setTopic: React.Dispatch<React.SetStateAction<number>>;
}

const Input = ({ cmd, setCmd, setOutput, setTopic }: InputProps) => {
    const db = "db.students.";
    const regex_db = new RegExp(db);
    const [input, setInput] = useState(data[0].query.replace(regex_db, ""));
    const [isClicked, setClicked] = useState("0");
    const inputRef = useRef(null);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "i" && document.activeElement !== inputRef.current) {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", handleKeyPress);
    });
    useEffect(() => {
        async function runCommand() {
            const res = await fetch("http://localhost:3000/data", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: `JSON.stringify(${cmd}.toArray())`,
                }),
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
        setCmd(`${db}${input}`); //should run the command
    };
    const click = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCmd(e.currentTarget.value);
        setClicked(e.currentTarget.id);
        setInput(e.currentTarget.value.replace(regex_db, ""));
        setTopic(Number(e.currentTarget.getAttribute("index")) || 0);
    };
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInput(e.currentTarget.value);
    };
    return (
        <>
            <div className="flex flex-row bg-green-500 w-fit m-2 text-xl rounded-xl p-1 lg:mb-6 lg:mt-6 lg:text-[1.8rem] xl:text-4xl xl:mb-8 ">
                <form onSubmit={submit}>
                    <input
                        type="text"
                        name="cmd"
                        ref={inputRef}
                        onChange={change}
                        value={input}
                        autoComplete="off"
                        className="bg-white resize-x overflow-x-auto w-[45vw] rounded-xl pl-2 h-13 xl:p"
                    />
                    <button
                        className="text-white  bg-green-500 h-full hover:text-lime-100  px-4"
                        type="submit"
                    >
                        ☘︎
                    </button>
                </form>
            </div>
            <div className="flex w-[47vw] flex-row flex-wrap ml-4 gap-2">
                {data.map((ex, index) => (
                    <button
                        // please fix radius
                        className="bg-white rounded-xl border-stone-800 hover:bg-lime-500 hover:text-white hover:border-white p-1 text-2 border-2  text-4  lg:p-2 xl:p-3 xl:text-8"
                        key={crypto.randomUUID()}
                        id={index.toString()}
                        type="button"
                        onClick={click}
                        value={ex.query}
                        index={index}
                        style={{
                            backgroundColor: isClicked === index.toString()
                                ? "oklch(69.6% 0.17 162.48)"
                                : "",
                        }}
                    >
                        {ex.brief}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Input;
