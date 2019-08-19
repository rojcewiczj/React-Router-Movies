import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import ReactDOM from "react-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

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
      <Route path ="/" render={props =><MovieList {...props} movies={MovieList}/>} />
      <Route path="/Movies/:id" render={Movie} />
      </Router>
    </div>
  );
};

export default App;
const rootElment = document.getElementById('root');
ReactDOM.render (<Router><App /></Router>, rootElment);