import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Redirect, Switch } from 'react-router-dom';
import ScrollToTop from './components/Scroll_To_Top';
import MainNav from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'
import PC_Game from './components/PC_Game'

class App extends Component {
  state = {  }
  render() { 
    return (
      <ScrollToTop>
        <MainNav />
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/pc_game" exact component={PC_Game} />
        </div>
      </ScrollToTop>
        

    );
  }
}
 


export default App;
