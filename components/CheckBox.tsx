import { useState } from "react";

export default function Checkbox(props: any) {
  return (
    <>
      <div className="char-include-group">
        <label>
          <input
            type="checkbox"
            id="uppercase"
            checked={props.UpperCase}
            onChange={props.handleUpperCaseChange}
          />
          <span className="custom-checkbox"></span>
          <p>Include Uppercase Letters</p>
        </label>

        <label>
          <input
            type="checkbox"
            id="uppercase"
            checked={props.LowerCase}
            onChange={props.handleLowerCaseChange}
          />
          <span className="custom-checkbox"></span>
          <p> Include Lowercase Letters</p>
        </label>

        <label>
          <input
            type="checkbox"
            id="uppercase"
            checked={props.IncludeNumbers}
            onChange={props.handleIncludeNumbersChange}
          />
          <span className="custom-checkbox"></span>
          <p>Include Numbers</p>
        </label>

        <label>
          <input
            type="checkbox"
            id="uppercase"
            checked={props.IncludeSymbols}
            onChange={props.handleIncludeSymbolsChange}
          />
          <span className="custom-checkbox"></span>
          <p>Include Symbols</p>
        </label>

      </div>
    </>
  );
}
