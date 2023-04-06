import { useState } from "react";

export default function Slider(props: any) {
  // const { defaultValue, min, max } = props;
  return (
    <>
      <div className="password-settings">
        <div className="char-length">
          <p>Character Length</p>
          <span className="char-count">{props.characterLength}</span>
        </div>
        <div className="password-settings">
          <input
            className="char-length-slider"
            type="range"
            id="passwordLengthSlider"
            name="passwordLength"
            value={props.characterLength}
            onChange={props.handleCharacterLengthChange}
            min="0"
            max="20"
          />
        </div>
      </div>
    </>
  );
}
