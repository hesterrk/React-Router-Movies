import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
   
    <div>
      <SavedList list={savedList} />

      
      <Switch>
      <Route exact path="/">
      <MovieList/>
      </Route>
       <Route path="/movies/:id">
      <Movie/>
      </Route>
      </Switch>
      
    
    </div>
    
  
  );
};

export default App;




//PROPS

//write name of prop in App, and then give value 
//e.g <Component nameofprop={value}/> so we can use value inside it
//then to access you write: props.value in the component you want it


//PASSING to another component

//On App: make sure the component you want is imported to App
//this is where we user 'render' on props: render takes in a value always a function and that function carries with it 'props'. This is how we pass the props to another component
//cont..pass props off the Route because Route doesnt carry an emptyy object as a prop- Route comes with history location and match props (already predefined)
// <Route exact path '/example/:id' render((props) =>(Examplecomponent (...props) value={nameofProp}/>})/>
//pass me the existent props- takes the props '...props' and gives you everything that is in their