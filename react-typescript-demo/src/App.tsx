import "./App.css";
import Greet from "./components/Greet";

function App() {
  return (
    <div className="App">
      <Greet name="Gideon" messageCount={10} isLoggedIn={false} />
    </div>
  );
}

export default App;
