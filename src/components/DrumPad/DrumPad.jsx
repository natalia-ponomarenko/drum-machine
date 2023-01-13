import "./DrumPad.scss"

export function DrumPad({ audio, triggerHandler, thisref, handleKeyPress }) {
  return (
    <div
      className="drum-pad"
      onClick={() => triggerHandler(audio.id)}
      key={audio.id}
      id={audio.parentId}
      tabIndex={0}
      ref={thisref}
      onKeyDown={handleKeyPress}
    >
      <audio id={audio.id} className="clip" src={audio.soundPath}></audio>
      {audio.id}
    </div>
  );
}
