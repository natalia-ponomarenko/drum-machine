import { useState } from "react";
import { Display } from "../Display/Display";
import { DrumPadGroup } from "../DrumPadGroup/DrumPadGroup";
import "./DrumMachine.scss";

export function DrumMachine() {
  const [soundName, setSoundName] = useState("");

  return (
    <div class="background-container">
      <img src="../../images/galaxy.png" alt="" />
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div id="drum-machine">
        <DrumPadGroup setSoundName={setSoundName} />
        <Display soundName={soundName} />
      </div>
    </div>
  );
}
