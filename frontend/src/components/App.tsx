import { createContext, useEffect, useState } from "react";
import ExplainBox from "./ExplainBox.tsx";
import Header from "./Header.tsx";
import Input from "./Input.tsx";
import Output from "./Output.tsx";

function App() {
    const [cmd, setCmd] = useState("");
    const [output, setOutput] = useState("");
    const [topic, setTopic] = useState(0);
    useEffect(() => {
        window.focus();
    });
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
