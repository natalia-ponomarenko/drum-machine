import { audioClips } from "../../variables";
import { DrumPad } from "../DrumPad/DrumPad";
import "./DrumPadGroup.scss";
import $ from "jquery";

export function DrumPadGroup({ setSoundName }) {
  function triggerTheSoundEffect(letter, soundName) {
    $("#" + letter)
      .get(0)
      .play();
    setSoundName(soundName);
  }

  $(document).on("keypress", (event) => {
    const audio = $("#" + event.key.toUpperCase());
    const parentID = audio.parent().attr('id');
    audio.get(0).play();
    setSoundName(parentID);
  });

  return (
    <div className="drum-group">
      {audioClips.map((audio) => {
        return (
          <DrumPad
            key={audio.id}
            audio={audio}
            triggerHandler={triggerTheSoundEffect}
          />
        );
      })}
    </div>
  );
}
