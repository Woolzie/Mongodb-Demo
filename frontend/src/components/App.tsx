import { createContext, useEffect, useState } from "react";
import { data } from "../lib/data.ts";
import ExplainBox from "./ExplainBox.tsx";
import Header from "./Header.tsx";
import Input from "./Input.tsx";
import Output from "./Output.tsx";

function App() {
    const [cmd, setCmd] = useState(data[0].query);
    const [output, setOutput] = useState("");
    const [topic, setTopic] = useState(0);
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === "f") {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                }
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);
    return (
        <div className="w-screen h-screen">
            <Output output={output} cmd={cmd} />
            <Header topic={topic} />
            <Input
                cmd={cmd}
                setCmd={setCmd}
                setOutput={setOutput}
                setTopic={setTopic}
            />
            <ExplainBox topic={topic} />
        </div>
    );
}

export default App;
