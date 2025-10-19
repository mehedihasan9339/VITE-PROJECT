import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User, {Profile, Settings, userKey} from "./User.jsx";
import { UserComponent } from "./UserComponent.jsx";

function App() {
  return (
    <>
      <h1>Mehedi Hasan</h1>
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
