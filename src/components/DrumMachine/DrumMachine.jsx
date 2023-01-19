import React, { useState, useEffect } from "react";
import { Display } from "../Display/Display";
import { DrumPadGroup } from "../DrumPadGroup/DrumPadGroup";
import { VolumeControl } from "../VolumeControl/VolumeControl";
import "./DrumMachine.scss";
import { audioClips } from "../../variables";
import { audioClips2 } from "../../variables";
import { Button } from "../Button/Button";
import $ from 'jquery';

export const SoundNameContext = React.createContext();

export function DrumMachine() {
  const [soundName, setSoundName] = useState("");
  const [volume, setVolume] = useState(0.45);
  const [soundSet, setSoundSet] = useState(audioClips);

  function updateTheDisplay(text) {
    setSoundName(text)
  }

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleSoundSetChange = () => {
    soundSet === audioClips
      ? setSoundSet(audioClips2)
      : setSoundSet(audioClips);
  };

  const muteTheSound = () => {
    setVolume(0);
  };

  useEffect(() => {
    const setKeyToVolume = () => {
      const audios = soundSet.map((audio) => $("#audio.id"));
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
    <SoundNameContext.Provider value={soundName}>
      <div id="drum-machine">
        <DrumPadGroup soundSet={soundSet} setSoundName={updateTheDisplay} />
        <div className="left-hand-group">
          <Display />
          <VolumeControl
            volume={volume}
            handleVolumeChange={handleVolumeChange}
            setSoundName={updateTheDisplay}
          />
          <Button actionHandler={handleSoundSetChange}>Change Set</Button>
          <Button actionHandler={muteTheSound}>Mute Sound</Button>
        </div>
      </div>
    </SoundNameContext.Provider>
  );
}
