import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Delete from "./icons/Delete";
import Copy from "./icons/Copy";
import Loading from "./components/Loading";
import "./App.css";
import JsonConverter from "./components/JsonConverter";

function App() {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const copyToClipBoard = () => alert(`Copied ✅`);
  const handleSubmit = () => {
    /// set loading to true
    setLoading(true);
    const body = JSON.stringify({
      value,
    });

    const headers = {
      "Content-Type": "application/json",
    };
    fetch("http://localhost:4000/convert", {
      method: "POST",
      body,
      headers,
    })
      .then((res) => res.json())
      .then((data) => {
        setOutput(data.response);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <main className="app">
      <header className="header__container">
        <div className="header">
          <h3>JSON</h3>
          <div className="header__right">
            <button className="runBtn" onClick={handleSubmit}>
              Run
            </button>
            <Delete setValue={setValue} />
          </div>
        </div>

        <div className="header">
          <h3>Typescript</h3>
          <CopyToClipboard text={output} onCopy={copyToClipBoard}>
            <span>
              <Copy />
            </span>
          </CopyToClipboard>
        </div>
      </header>

      <JsonConverter
        loading={loading}
        value={value}
        output={output}
        setValue={setValue}
        setOutput={setOutput}
      />
    </main>
  );
}

export default App;
