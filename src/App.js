import { DrumMachine } from "./components/DrumMachine/DrumMachine";
import "./styles.scss";
import { Background } from "./components/Background/Background";

function App() {
  return (
    <Background>
      <DrumMachine />
    </Background>
  );
}

export default App;
