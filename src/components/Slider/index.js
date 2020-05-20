import React, { Component} from 'react';
import {Carousel, Container} from 'react-bootstrap';
import { getGameSlider } from "../../actions/game_actions";
import {connect} from 'react-redux'
import './style.css';

class Slider extends Component {
    state = { 
        name: ["Final Fantasy VII Remake", "Final Fantasy XV: Royal Edition", "Call Of Duty: Modern Warfare"],
        url: ["https://cdn.arstechnica.net/wp-content/uploads/2020/04/FINAL-FANTASY-VII-REMAKE_listing.jpg",
            "https://images3.alphacoders.com/746/thumb-1920-746998.jpg",
            "https://store-images.s-microsoft.com/image/apps.1926.67185831113154542.823e899c-d262-40a0-91f6-eee04bdc3713.ca4b2ff5-8dc9-4774-a5f1-4e379a72cbda?mode=scale&q=90&h=1080&w=1920"
    ]
    }

    componentDidMount() {
        this.props.dispatch(getGameSlider(this.state.name))
    }

    render() { 
   
        return ( 
      
                <Carousel >
                {this.props.games_slider !== undefined 
                ? this.props.games_slider.map((Item, index) => 
                        
                    <Carousel.Item key={index} style={{height:'80vh'}} >
                        <img
                        className="d-block w-100"
                        src= {this.state.url[index]}
                        alt="First slide"
                        
                        />
                        <Carousel.Caption>
                        <h1>{Item.name}</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                )

                : null}
                </ Carousel>
     
           
        )
}
}

const mapStateToProps = (state) => {

    return {
        games_slider: state.games.games_slider
    }
}

export default connect(mapStateToProps)(Slider);
