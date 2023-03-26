import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Delete from "./icons/Delete";
import Copy from "./icons/Copy";
import "./App.css";
import JsonConverter from "./components/JsonConverter";
import { LangaugeOption, languageOptions } from "./utils/types";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const [jsonInput, setValue] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedLanguage, setLanguage] = useState(languageOptions[0]);

  const copyToClipBoard = () => alert(`Copied ✅`);

  const handleLanguageChange = (newLanguage?: LangaugeOption) => {
    if (newLanguage) {
      setLanguage(newLanguage);
      handleSubmit();
    }
  };

  useEffect(() => {
    handleSubmit();
  }, [selectedLanguage]);

  const handleSubmit = () => {
    /// set loading to true
    setLoading(true);
    const body = JSON.stringify({
      json_input: jsonInput,
      language: selectedLanguage.value,
    });

    console.log("Language:: ", selectedLanguage.value);

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
          <LanguageSelector
            loading={loading}
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
            options={languageOptions}
          />
          <CopyToClipboard text={output} onCopy={copyToClipBoard}>
            <span>
              <Copy />
            </span>
          </CopyToClipboard>
        </div>
      </header>

      <JsonConverter
        loading={loading}
        value={jsonInput}
        output={output}
        setValue={setValue}
        setOutput={setOutput}
      />
    </main>
  );
}

export default App;
