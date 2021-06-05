import React from "react";
import { Switch, Route, Router } from "react-router-dom";

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
      <Route path="/players/:id" exact component={Player} />
      <Route exact path="/teams" component={Teams} />
      <Route exact path="/teams/:id" component={Team} />
      <Route exact path="/games" component={Games} />
      <Route exact path="/seasonleaders" component={SeasonLeaders} />
    </Switch>
);

export default Routes;