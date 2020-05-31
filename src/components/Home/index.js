import React, { Component } from 'react';
import Game_Lists from '../Game_Lists';
import MainNav from '../NavBar'

const Home  = (props) => {
    
    return ( 
        <div>
            <MainNav handler={props.handler} />
            <Game_Lists />
        </div> 
     );
}
 
export default Home ;