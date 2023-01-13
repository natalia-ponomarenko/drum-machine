import { useState } from "react";
import { Display } from "../Display/Display";
import { DrumPadGroup } from "../DrumPadGroup/DrumPadGroup";
import "./DrumMachine.scss"

export function DrumMachine() {
  const [padName, setPadName] = useState('');

  return (
    <div id="drum-machine">
      <DrumPadGroup />
      <Display />
    </div>
    );
}
