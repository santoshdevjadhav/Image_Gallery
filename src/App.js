import React from 'react';
import {Route,Switch} from 'react-router-dom';

import ImageGallery from './container/imageGallery';
import Favourites from './container/favoutites';
import './App.css';

function App() {
  return (
    <div className={'App'}>
        <Switch>
            <div>
            <Route exact path={'/'} component={ImageGallery}/>
            <Route exact path={'/favourites'} component={Favourites}/>
            </div>
        </Switch>
    </div>
  );
}

export default App;

