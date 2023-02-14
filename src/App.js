import Count from "./components/Count";
import FocusInput from "./components/FocusInput";
import Render from "./components/Render";
import State from "./components/State";
import Track from "./components/Track";
import StopWatch from "./components/StopWatch";

function App() {
  return (
    <div className="App">
      <State /> 
      <FocusInput /> 
      <Render /> 
      <Count /> 
      <Track />
      <StopWatch />
    </div>
  );
}

export default App;
