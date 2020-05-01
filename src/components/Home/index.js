import React, { Component } from 'react';
import MainNav from '../NavBar/index';
import Slider from '../Slider/index';
import Game_Lists from '../Game_Lists';
import {Container, Row, Col} from 'react-bootstrap';

const Home  = () => {
    return ( 
        <div>
            <MainNav />
            <Slider />
            <Game_Lists />
        </div>
   

    
     );
}
 
export default Home ;