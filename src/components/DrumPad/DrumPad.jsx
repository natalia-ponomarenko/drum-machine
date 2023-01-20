import "./DrumPad.scss";
import { useCallback, useEffect } from "react";
import $ from "jquery";

export function DrumPad({ audio, setSoundName }) {
  const playAudio = useCallback(
    (key, text) => {
      const audio = $("#" + key)[0];
      styleActiveKey(audio);
      audio.play();
      setSoundName(text);
      unstyleActiveKey(audio);
    },
    [setSoundName]
  );

  useEffect(() => {
    const keyEvent = ({ key }) =>
      key.toUpperCase() === audio.id && playAudio(audio.id, audio.text);
    $(document).on("keypress", keyEvent);

    return () => {
      $(document).off("keypress", keyEvent);
    };
  }, [audio.id, audio.text, playAudio]);

  const styleActiveKey = (audio) => {
    audio.parentElement.classList.add("active");
  };

  const unstyleActiveKey = (audio) => {
    setTimeout(() => {
      audio.parentElement.classList.remove("active");
    }, 200);
  };

  return (
    <div
      className="drum-pad"
      onClick={() => playAudio(audio.id, audio.text)}
      key={audio.id}
      id={audio.parentId}
    >
      <audio id={audio.id} className="clip" src={audio.soundPath}></audio>
      {audio.id}
    </div>
  );
}
