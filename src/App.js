import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Redirect, Switch } from 'react-router-dom';
import ScrollToTop from './components/Scroll_To_Top';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'


class App extends Component {
  state = {  }
  render() { 
    return (
      <ScrollToTop>
        <div className="App">
          <Route path="/" exact component={Home} />
        </div>
      </ScrollToTop>
        

    );
  }
}
 


export default App;
