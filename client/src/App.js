import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import ReactDOM from "react-dom";
import MovieList from "./Movies/MovieList";
import MovieCard from "./Movies/MovieCard";
import Movie from "./Movies/Movie";
import { Route , Link } from "react-router-dom";
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
      <Route exact path ="/" render={props =><MovieList {...props} movies={MovieList}  />} />
       <Route path="/Movies/:id"  render={props=> < Movie {...props} movie={Movie}  /> }/>
      
      </Router>
    </div>
  );
};

export default App;
const rootElment = document.getElementById('root');
ReactDOM.render (<Router><App /></Router>, rootElment);