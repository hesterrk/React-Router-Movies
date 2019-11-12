import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom'


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
   
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={MovieList} />
      <Route exact path='/movies/:id' render={(props) => (<Movie {...props}/>)} />
    </div>
    </Router>
  
  );
};

export default App;


//PROPS

//write name of prop in App, and then give value 
//e.g <Component nameofprop={value}/> so we can use value inside it
//then to access you write: props.value in the component you want it
//e.g const component = (props) => {
//    console.log(props.value)
//  return(<h1></h1>)
//}

//PASSING to another component

//On App: make sure the component you want is imported to App
//this is where we user 'render' on props: render takes in a value always a function and that function carries with it 'props'. This is how we pass the props to another component
//cont..pass props off the Route because Route doesnt carry an emptyy object as a prop- Route comes with history location and match props (already predefined)
// <Route exact path '/example/:id' render((props) =>(Examplecomponent (...props) value={nameofProp}/>})/>
//pass me the existent props- takes the props '...props' and gives you everything that is in their