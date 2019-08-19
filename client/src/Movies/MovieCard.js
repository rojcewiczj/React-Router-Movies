import React from 'react';
import { Link } from "react-router-dom";
const MovieCard = props => {
  return(
   
     <Link to={`/Movie/${props.id}`} />
  
  );
  
};

export default MovieCard;
