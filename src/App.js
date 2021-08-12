import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Audio,
  Bilder,
  Carakku,
  Changelog,
  Controller,
  Hobbyci,
  Impressum,
  Lcmeter,
  Ledleiste,
  Mintyboost,
  Nachttischlampe,
  Pianotrainer,
  Romki,
  Romkibilder,
  Schaltung,
  Singertrainer,
  Sonstiges,
  Tutorial,
  W5500,
  Wschaltung,
  Home,
  Zeichenbefehle,
} from "./pages";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={() => <Home title="Projekte" />} />
        <Route path="/pianotrainer/audio" exact component={() => <Audio />} />

        <Route path="/bilder" exact component={() => <Bilder />} />
        <Route path="/carakkutester" exact component={() => <Carakku />} />
        <Route
          path="/hobbyci/changelog"
          exact
          component={() => <Changelog />}
        />
        <Route
          path="/pianotrainer/controller"
          exact
          component={() => <Controller />}
        />
        <Route path="/hobbyci" exact component={() => <Hobbyci />} />
        <Route path="/impressum" exact component={() => <Impressum />} />
        {/* <Route path="/index" exact component={() => <Index />} /> */}
        <Route path="/lcmeter" exact component={() => <Lcmeter />} />
        <Route
          path="/pianotrainer/ledleiste"
          exact
          component={() => <Ledleiste />}
        />
        <Route
          path="/sonstiges/mintyboost"
          exact
          component={() => <Mintyboost />}
        />
        <Route
          path="/nachttischlampe"
          exact
          component={() => <Nachttischlampe />}
        />
        <Route path="/pianotrainer" exact component={() => <Pianotrainer />} />
        <Route path="/romki" exact component={() => <Romki />} />
        <Route path="/romki/bilder" exact component={() => <Romkibilder />} />
        <Route
          path="/lcmeter/schaltung"
          exact
          component={() => <Schaltung />}
        />
        <Route
          path="/singertrainer"
          exact
          component={() => <Singertrainer />}
        />
        <Route path="/sonstiges" exact component={() => <Sonstiges />} />
        <Route path="/w5500" exact component={() => <W5500 />} />
        <Route path="/w5500/schaltung" exact component={() => <Wschaltung />} />
        <Route path="/hobbyci/tutorial" exact component={() => <Tutorial />} />
        <Route
          path="/hobbyci/tutorial/zeichenbefehle"
          exact
          component={() => <Zeichenbefehle />}
        />
      </Switch>
    </Router>
  );
}

export default App;
