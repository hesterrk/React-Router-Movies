import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path='/' component={MovieList} />
      {/* add another route here */}
    </div>
  );
};

export default App;
