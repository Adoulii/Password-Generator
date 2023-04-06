import { useState } from "react";
import Checkbox from "./CheckBox";
import Slider from "./Slider";
import {
  generateRandomLowerCase,
  generateRandomNumber,
  generateRandomSymbols,
  generateRandomUpperCase,
  generatePassword,
} from "../Provider/Provider";
export default function PasswordGenerator(props: any) {
  const [UpperCase, setUpperCase] = useState(false);
  const [LowerCase, setLowerCase] = useState(false);
  const [IncludeNumbers, setIncludeNumbers] = useState(false);
  const [IncludeSymbols, setIncludeSymbols] = useState(false);
  const handleUpperCaseChange = () => setUpperCase(!UpperCase);
  const handleLowerCaseChange = () => setLowerCase(!LowerCase);
  const handleIncludeNumbersChange = () => setIncludeNumbers(!IncludeNumbers);
  const handleIncludeSymbolsChange = () => setIncludeSymbols(!IncludeSymbols);
  const [characterLength, setCharacterLength] = useState(0);
  const [GeneratedPassword, setGeneratedPassword] = useState("");
  const handleCharacterLengthChange = (e: any) => {
    setCharacterLength(e.target.value);
  };

  function GeneratePassword() {
    let res = generatePassword(
      characterLength,
      UpperCase,
      LowerCase,
      IncludeNumbers,
      IncludeSymbols
    );
    props.onPasswordGenerated(res);
  }

  return (
    <>
      <Slider
        characterLength={characterLength}
        setCharacterLength={setCharacterLength}
        handleCharacterLengthChange={handleCharacterLengthChange}
      ></Slider>
      <Checkbox
        upperCase={UpperCase}
        handleUpperCaseChange={handleUpperCaseChange}
        lowerCase={LowerCase}
        handleLowerCaseChange={handleLowerCaseChange}
        includeNumbers={IncludeNumbers}
        handleIncludeNumbersChange={handleIncludeNumbersChange}
        includeSymbols={IncludeSymbols}
        handleIncludeSymbolsChange={handleIncludeSymbolsChange}
      ></Checkbox>
      <button className="generate-btn" onClick={GeneratePassword}>
        Generate
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#24232C"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </button>
    </>
  );
}
