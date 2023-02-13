import Count from "./components/Count";
import FocusInput from "./components/FocusInput";
import Render from "./components/Render";
import State from "./components/State";
import Track from "./components/Track";
function App() {
  return (
    <div className="App">
      { <State /> }
      { <FocusInput /> }
      { <Render /> }
      { <Count /> }
      <Track />
    </div>
  );
}

export default App;
