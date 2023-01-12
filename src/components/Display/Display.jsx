import './Display.scss';
import Q from '../../audioclips/Q.mp3';
import W from '../../audioclips/W.mp3';
import E from '../../audioclips/E.wav';
import A from '../../audioclips/A.wav';
import S from '../../audioclips/S.wav';
import D from '../../audioclips/D.mp3';


const audioClips = [
  {id: 'Q', soundPath: Q},
  {id: 'W', soundPath: W},
  {id: 'E', soundPath: E},
  {id: 'A', soundPath: A},
  {id: 'S', soundPath: S},
  {id: 'D', soundPath: D}
]

export function Display() {

  function triggerTheSoundEffect(letter) {
    var audio = document.getElementById(letter);
    console.log(audio)
    audio.play();
  }

  return <div id="display" style={{textAlign: "center", width: '100%'}}>
    {audioClips.map((audio, i) => {
      return(
      <div className="drum-pad" onClick={() => triggerTheSoundEffect(audio.id)} key={audio.id}><audio id={audio.id} className="clip" src={audio.soundPath}></audio>{audio.id}</div>)
    })
    }
    </div>;
}
