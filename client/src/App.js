import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import ReactDOM from "react-dom";
import MovieList from "./Movies/MovieList";
import MovieCard from "./Movies/MovieCard";
import Movie from "./Movies/Movie";
import { Route , Link } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  
  };

  return (

    <div>
      
      <SavedList list={savedList} />
      <Route exact path ="/" render={props =><MovieList {...props} movies={MovieList}  />} />
       <Route path="/Movies/:id"  render={props=> <MovieCard {...props} movie={MovieCard} /> }/>
      
    
     
      
    </div>
  );
};

export default App;

