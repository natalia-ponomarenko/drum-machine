import "./DrumPad.scss";

export function DrumPad({ audio, triggerHandler }) {
  return (
    <div
      className="drum-pad"
      onClick={() => triggerHandler(audio.id, audio.parentId)}
      key={audio.id}
      id={audio.parentId}
    >
      <audio id={audio.id} className="clip" src={audio.soundPath}></audio>
      {audio.id}
    </div>
  );
}
