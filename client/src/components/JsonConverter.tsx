import Editor from "@monaco-editor/react";
import React, { useState } from "react";
import { SetStateAction } from "../utils/types";
import Loading from "./Loading";

interface JsonConverterProps {
  loading: boolean;
  value: string;
  output: string;
  setOutput: SetStateAction<string>;
  setValue: SetStateAction<string>;
}

const JsonConverter = ({
  loading,
  value,
  output,
  setOutput,
  setValue,
}: JsonConverterProps) => {
  return (
    <div className="code__container">
      <div className="code">
        <Editor
          height="90vh"
          className="editor"
          defaultLanguage="json"
          defaultValue="{ }"
          value={value}
          onChange={(value) => setValue(value ?? "")}
        />
      </div>

      <div className="output">
        {loading ? (
          <Loading />
        ) : (
          <Editor
            height="90vh"
            className="editor"
            defaultLanguage="typescript"
            options={{ domReadOnly: true, readOnly: true }}
            defaultValue=""
            value={output}
            onChange={(value) => setOutput(value ?? "")}
          />
        )}
      </div>
    </div>
  );
};

export default JsonConverter;
