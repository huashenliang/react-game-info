import React, {Component} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Redirect, Switch,BrowserRouter } from 'react-router-dom';

import ScrollToTop from './components/Scroll_To_Top';
import MainNav from './components/NavBar';


import Home from './components/Home';
import PC_Game from './components/PC_Game';
import Game_Details from './components/Game_details';

class App extends Component {
  state = {  }
  render() { 
    return (
    <Switch>
        <Route path="/game_details" component={Game_Details} />
        <Route path='/pc_games' component={PC_Game}/>
        {/* <Route path="/game_details">
          <Game_Details />
        </Route> */}

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        {/* <Route path="/contact/:id">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContacts />
        </Route> */}

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    );
  }
}
 


export default App;
