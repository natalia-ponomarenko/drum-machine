import { DrumPad } from "../DrumPad/DrumPad";
import "./DrumPadGroup.scss";

export function DrumPadGroup({ soundSet,setSoundName }) {
  return (
    <div className="drum-group">
      {soundSet.map((audio) => {
        return (
          <DrumPad
            key={audio.id}
            audio={audio}
            setSoundName={setSoundName}
          />
        );
      })}
    </div>
  );
}
