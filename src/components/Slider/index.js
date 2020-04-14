import React, { Component} from 'react';
import {Carousel} from 'react-bootstrap';
import { getGameSlider } from "../../actions/game_actions";
import {connect} from 'react-redux';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

class Slider extends Component {
    state = { 
        name: ["Final Fantasy VII Remake", "Final Fantasy X: HD Remaster", "Final Fantasy XV"]
    }

    componentDidMount() {
        this.props.dispatch(getGameSlider(this.state.name))
       
    }

    render() { 
        return ( 
            <Carousel >
           {this.props.games_slider !== undefined 
                ? this.props.games_slider.map(i => {
                    return(
                    <Carousel.Item key={i.name} >
                        <img
                        className="d-block w-100"
                        src="//images.igdb.com/igdb/image/upload/t_1080p/sc6vj1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h1>{i.name}</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
            })
            : null} 
            </Carousel>
         );
    }
}
 

const mapStateToProps = (state) => {
    return {
        games_slider: state.games.games_slider
    }
}

export default connect(mapStateToProps)(Slider);
