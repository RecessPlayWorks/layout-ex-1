import React from "react";
import { render } from "react-dom";
import ReactGA from 'react-ga';
import Header from './Header';



function initializeReactGA() {
  ReactGA.initialize("UA-148764400-1");
  ReactGA.pageview('/homepage');
}
const App = () => {
  return (
    <div className="app-js-div">
      <Header/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
