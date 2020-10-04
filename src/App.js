import React from 'react';
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"
import './App.css';
import { Route, Switch } from "react-router-dom"
import Navbar from "./component/Navbar"

function App() {
  return (
    <div className="App">

      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Rooms/" component={Rooms} />
        {/*to access specific information got like php url passing of information  /Rooms/:slug*/}
        <Route exact path="/Rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
