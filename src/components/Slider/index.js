import React, { Component} from 'react';
import {Carousel} from 'react-bootstrap';
import { getGameSlider } from "../../actions/game_actions";
import {connect} from 'react-redux'

class Slider extends Component {
    state = { 
        name: "Final Fantasy VII Remake"
    }

    componentDidMount() {
        this.props.dispatch(getGameSlider(
            this.state.name
        ))
    }

    render() { 
        return ( 
            <Carousel style={{height: '50px', marginBottom: '20%'}}>
            <Carousel.Item >
                <img
                className="d-block w-100"
                src="//images.igdb.com/igdb/image/upload/t_1080p/sc6vj1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Third slide"
                />
    
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />
    
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
         );
    }
}
 

const mapStateToProps = (state) => {
    return {
        slider_games: state.games_slider
    }
}

export default connect(mapStateToProps)(Slider);
