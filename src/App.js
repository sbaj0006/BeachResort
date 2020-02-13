import React from "react";
import "./App.css";
import Home from "./Page/Home";
import Rooms from "./Page/Rooms";
import SingleRoom from "./Page/SingleRoom";
import Error from "./Page/Error";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/single-room" component={SingleRoom} />
    </>
  );
}

export default App;
