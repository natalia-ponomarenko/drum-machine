import { useState, useEffect } from "react";
import { Display } from "../Display/Display";
import { DrumPadGroup } from "../DrumPadGroup/DrumPadGroup";
import { VolumeControl } from "../VolumeControl/VolumeControl";
import "./DrumMachine.scss";
import { audioClips } from "../../variables";
import { audioClips2 } from "../../variables";

export function DrumMachine() {
  const [soundName, setSoundName] = useState("");
  const [volume, setVolume] = useState(0.45);
  const [soundSet, setSoundSet] = useState(audioClips)

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleSoundSetChange = () => {
    soundSet === audioClips ? setSoundSet(audioClips2) : setSoundSet(audioClips);
  }

  const muteTheSound = () => {
    setVolume(0);
  }

  useEffect(() => {
    const setKeyToVolume = () => {
      const audios = soundSet.map((audio) =>
        document.getElementById(audio.id)
      );
      audios.forEach((audio) => {
        if (audio) {
          audio.volume = volume;
          setSoundName(`Volume: ${Math.round(volume * 100)}%`);
        }
      });
    };

    setKeyToVolume();
  }, [soundSet, volume]);

  return (
    <div className="background background__container">
      <img
        src="../../images/galaxy.png"
        alt="galaxy"
        className="background__image"
      />
      <div className="background__stars"></div>
      <div className="background__twinkling"></div>
      <div id="drum-machine">
        <DrumPadGroup soundSet={soundSet} setSoundName={setSoundName} />
        <div className="left-hand-group">
          <Display soundName={soundName} />
          <VolumeControl
            volume={volume}
            handleVolumeChange={handleVolumeChange}
            setSoundName={setSoundName}
          />
          <button onClick={handleSoundSetChange}>Change</button>
          <button onClick={muteTheSound}>Mute</button>
        </div>
      </div>
    </div>
  );
}
