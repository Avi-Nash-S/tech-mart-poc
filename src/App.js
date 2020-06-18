import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import CardDetailsViews from './views/cardDetails-views.jsx'
import LandingPageViews from './views/landingPage-views.jsx';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={LandingPageViews} />
      <Route path={`/:id`} component={CardDetailsViews} />
    </Switch>
  );
}

export default withRouter(App);
