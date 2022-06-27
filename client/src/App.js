import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Characters from "./components/characters/Characters";
import CharacterDetail from "./components/characterDetails/CharacterDetail";
import Episodes from "./components/episodes/Episodes";
import NavBar from "./components/navbar/NavBar";
import EpisodeDetail from "./components/episodeDetails/EpisodeDetail";
import Deaths from "./components/deaths/Deaths";
import DeathDetail from "./components/deathDetails/DeathDetail";


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={NavBar}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/characters" component={Characters}></Route>
      <Route exact path="/characters/:id" component={CharacterDetail}></Route>
      <Route exact path="/episodes" component={Episodes}></Route>
      <Route exact path="/episodes/:id" component={EpisodeDetail}></Route>
      <Route exact path="/deaths" component={Deaths}></Route>
      <Route exact path="/deaths/:name" component={DeathDetail}></Route>
      {/* <Route exact path="/deaths" component={}></Route> */}
    </BrowserRouter>
  );
}
export default App;
