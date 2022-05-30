import "./App.css";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
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
