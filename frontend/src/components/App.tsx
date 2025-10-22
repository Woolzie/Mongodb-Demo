import { createContext, useState } from "react";
import ExplainBox from "./ExplainBox.tsx";
import Input from "./Input.tsx";
import Output from "./Output.tsx";

function App() {
    const [cmd, setCmd] = useState("");
    const [output, setOutput] = useState("");
    const [topic, setTopic] = useState(0);
    return (
        <>
            <Input
                cmd={cmd}
                setCmd={setCmd}
                setOutput={setOutput}
                setTopic={setTopic}
            />
            <Output output={output} />
            <ExplainBox topic={topic} />
        </>
    );
}

export default App;
