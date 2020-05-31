import React, { Component } from 'react';
import Slider from '../Slider/index';
import Game_Lists from '../Game_Lists';
import {Container, Row, Col} from 'react-bootstrap';
import MainNav from '../NavBar'
const Home  = (props) => {
    return ( 
        <div>
            <MainNav handler={props} />
            <Game_Lists />
        </div> 
     );
}
 
export default Home ;