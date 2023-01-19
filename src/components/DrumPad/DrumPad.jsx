import "./DrumPad.scss";
import { useCallback, useEffect } from "react";
import $ from "jquery";

export function DrumPad({ audio, setSoundName }) {
  const playAudio = useCallback(
    (key) => {
      $("#" + key)
        .get(0)
        .play();
      setSoundName(audio.text);
    },
    [audio.text, setSoundName]
  );

  useEffect(() => {
    const keyEvent = ({ key }) =>
      key.toUpperCase() === audio.id && playAudio(audio.id);
    $(document).on("keypress", keyEvent);

    return () => {
      $(document).off("keypress", keyEvent);
    };
  }, [audio.id, playAudio]);

  return (
    <div
      className="drum-pad"
      onClick={() => playAudio(audio.id)}
      key={audio.id}
      id={audio.parentId}
    >
      <audio id={audio.id} className="clip" src={audio.soundPath}></audio>
      {audio.id}
    </div>
  );
}
