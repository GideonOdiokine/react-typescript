import "./App.css";
import { Counter } from "./components/state/Counter";
import { User } from "./components/User";

function App() {
  return (
    <div className="App">
      <User />
      <Counter />
    </div>
  );
}

export default App;
// {/* <Input value="" handleChange={(e) => console.log(e)} />
// <Button handleClick={(e, id) => console.log("Clicked", e, id)} /> */}
// {
//   /* <Status status="Success" />
//       <Heading>placeholder text</Heading>
//       <Oscar>
//         <Heading>Oscar goes to school !!!</Heading>
//       </Oscar> */
// }
// const personName = {
//   firstName: "Gideon",
//   lastName: "Odiokine",
// };

// const nameList = [
//   {
//     first: "Gideonick",
//     last: "Odiokine",
//   },
//   {
//     first: "Gidysmart",
//     last: "Odioks",
//   },
//   {
//     first: "Nancy",
//     last: "Odiokine",
//   },
// ];
