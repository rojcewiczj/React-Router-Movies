import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import ReactDOM from "react-dom";

import { Route } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Router>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      </Router>
    </div>
  );
};

export default App;
const rootElment = document.getElementById('root');
ReactDOM.render (<Router><App /></Router>, rootElment);