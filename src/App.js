import Count from "./components/Count";
import FocusInput from "./components/FocusInput";
import ParentWO from "./components/ParentWO";
import PropDrillingW from "./components/PropDrillingW";
import PropDrillingWo from "./components/PropDrillingWo";
import Render from "./components/Render";
import State from "./components/State";
import StopWatch from "./components/StopWatch";
import Track from "./components/Track";

function App() {
  return (
    <div className="App">
      <State /> 
      <FocusInput /> 
      <Render /> 
      <Count /> 
      <Track />
      <StopWatch />
      <ParentWO />
      <PropDrillingWo />
      <PropDrillingW />
    </div>
  );
}

export default App;
