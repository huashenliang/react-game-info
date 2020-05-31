import React, {useState} from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import PC_Game from './components/PC_Game';
import Game_Details from './components/Game_details';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
function App() {
    const [darkMode, setDarkMode] = useState(false);
    const darkTheme = createMuiTheme({
      palette: {
        type: 'dark'
      }
    });

    const lightTheme = createMuiTheme({
      palette: {
        type: 'light'
      }
    })

    const handler = () => { setDarkMode(!darkMode); console.log('handler')}
    

    return (

        <ThemeProvider theme={darkMode ? darkTheme :lightTheme}> 
            <CssBaseline />
            <Switch>
              <Route path="/game_details" exact component={Game_Details} />
              <Route path='/pc_games' component={PC_Game}/>
              <Route path="/">  <Home handler={handler} /></Route>
            </Switch>
        </ThemeProvider>

      

    );
}
 


export default App;
