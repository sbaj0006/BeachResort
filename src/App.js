import React from "react";
import "./App.css";
import Home from "./Page/Home";
import Rooms from "./Page/Rooms";
import SingleRoom from "./Page/SingleRoom";
import Error from "./Page/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        {/* <Route exact path="/single-room" component={SingleRoom} /> */}
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
