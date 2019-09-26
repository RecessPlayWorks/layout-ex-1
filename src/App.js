import React from "react";
import { render } from "react-dom";
import ReactGA from 'react-ga';
import Header from './Header';


function initializedAnalytics() {
  const TrackingID = "UA-148764400-1";
  ReactGA.initialize(`${TrackingID}`);
  ReactGA.pageview("/Homepage");
}

const App = () => {
  initializedAnalytics();
  return (
    <div className="app-js-div">
      <Header/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
