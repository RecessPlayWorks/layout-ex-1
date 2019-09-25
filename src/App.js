import React from "react";
import { render } from "react-dom";
// import SearchInput from "./SearchInput";
// import ImageGallery from "./ImageGallery";
import Header from './Header';

const App = () => {
  return (
    <div className="app-js-div">
      <Header/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
