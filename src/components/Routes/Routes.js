import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../Layout/LandingPage";
import PlayerPage from "../Players/PlayerPage";
import Player from "../Players/Player";
import Teams from "../Teams/Teams";
import Team from "../Teams/Team";
import Games from "../Games/Games";
import SeasonLeaders from "../SeasonLeaders/SeasonLeaders";

const Routes = () => (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/players" component={PlayerPage} />
      <Route exact path="/players/:id" component={(props) => <Player {...props} />} />
      <Route exact path="/teams" component={Teams} />
      <Route exact path="/teams/:id" component={(props) => <Team {...props} />} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/seasonleaders" component={SeasonLeaders} />
    </Switch>
);

export default Routes;