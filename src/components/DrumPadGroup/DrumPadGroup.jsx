import { audioClips } from "../../variables";
import { DrumPad } from "../DrumPad/DrumPad";
import React, { useRef } from 'react';
import "./DrumPadGroup.scss";

export function DrumPadGroup() {
  const myRef = useRef(null);

  function triggerTheSoundEffect(letter) {
    const audio = document.getElementById(letter);
    audio.play();
  }

  function handleKeyPress(event) {
    if (
      event.key === "q" ||
      event.key === "w" ||
      event.key === "e" ||
      event.key === "a" ||
      event.key === "s" ||
      event.key === "d" ||
      event.key === "z" ||
      event.key === "x" ||
      event.key === "c"
    ) {
     const audio = myRef.current.play();
      audio.play();
      console.log("key pressed");
    }
  }

  return (
    <div className="drum-group">
      {audioClips.map((audio) => {
        return (
          <DrumPad
            key={audio.id}
            audio={audio}
            triggerHandler={triggerTheSoundEffect}
            pressHandler={handleKeyPress}
            thisref={myRef}
          />
        );
      })}
    </div>
  );
}
