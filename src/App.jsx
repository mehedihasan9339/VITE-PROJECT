import "./App.css";
import User, { Profile, Settings, userKey } from "./User.jsx";
import { UserComponent } from "./UserComponent.jsx";

function App() {
  const username = "Mehedi Hasan";

  let x = 90;
  let y = 10;

  return (
    <>
      <h1>{username}</h1>
      <h1>{x + y}</h1>
      <h1>{x + y === 100 ? "True" : "False"}</h1>
      <button onClick={() => alert("Button Clicked!")}>Click Here</button>
      <User />
      <Profile />
      <Settings />
      <h2>{userKey}</h2>
      <Fruit />
      <Color />
      <h1>Sum: {sum()}</h1>
      <UserComponent />
    </>
  );
}

function Fruit() {
  return <h1>Fruit Component</h1>;
}

function Color() {
  return <h1>Color Component</h1>;
}

function sum() {
  return 5 + 5;
}

export default App;
