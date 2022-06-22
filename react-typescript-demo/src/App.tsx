import "./App.css";
import Greet from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    firstName: "Gideon",
    lastName: "Odiokine",
  };

  const nameList=[
    {
      first:"Gideonick",
      last:"Odiokine"
    },
    {
      first:"Gidysmart",
      last:"Odioks"
    },
    {
      first:"Nancy",
      last:"Odiokine"
    }
  ]

  return (
    <div className="App">
      <Greet name="Gideon" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
