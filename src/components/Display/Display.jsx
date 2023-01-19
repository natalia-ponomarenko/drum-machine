import "./Display.scss";
import { SoundNameContext } from "../DrumMachine/DrumMachine";
import { useContext } from "react";

export function Display() {
  const soundName = useContext(SoundNameContext);
  return <div id="display">{soundName}</div>;
}
