import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Game_List from './components/game_lists'

class App extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <Game_List />
      </div>
    );
  }
}
 


export default App;
