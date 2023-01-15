import "./VolumeControl.scss";

export function VolumeControl({ volume, handleVolumeChange }) {
  return (
    <div className="volume volume__wrapper">
      <input
        type="range"
        min="0"
        max="1"
        value={volume}
        onChange={handleVolumeChange}
        step="0.01"
        className="volume__range"
      />
    </div>
  );
}
