import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPCTrandingGame, getPS4TrandingGame, getXboxOneTrandingGame } from '../../actions/game_actions';

import Carousel from 'react-multi-carousel';
import './style.css';
import 'react-multi-carousel/lib/styles.css';
import Fade from 'react-reveal/Fade';
import GameCard from './Game_Card';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
class Game_Lists extends Component {
     
    state = {
        platform: { "pc": 6, "ps4": 48, "xboxOne": 49 },
        heading: ["Trending PC Games", "Trending PS4 Games", "Trending XboxOne Games"]
    }

    componentDidMount() {
        this.props.dispatch(getPCTrandingGame(
            this.state.platform["pc"]
        ))
        this.props.dispatch(getPS4TrandingGame(
            this.state.platform["ps4"]
        ))
        this.props.dispatch(getXboxOneTrandingGame(
            this.state.platform["xboxOne"]
        ))
    }

    render() { 
        return ( 
        <div className="div">
            {this.props.PC_trending_game && this.props.PS4_trending_game  && this.props.Xbox_One_trending_game 
            ?
            this.state.heading.map(i => (
            <div> 
                <h3 className="underscratch underscratch-yellow">{i}</h3>
                <Carousel
                    swipeable={true}
                    draggable
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // autoPlay={true}
                    // keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={3000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                
                {i === 'Trending PC Games' ? this.props.PC_trending_game.map((Item, index) => (
                    <Fade left delay={index*50} key={index} >
                        <GameCard item={Item} key={index} />
                    </Fade>
                )): null} 

                    {i === 'Trending PS4 Games' ? this.props.PS4_trending_game.map((Item, index) => (
                        <Fade left delay={index*50} key={index} >
                            <GameCard item={Item} key={index}/>
                        </Fade>
                    )): null} 
                    
                    {i === 'Trending XboxOne Games' ? this.props.Xbox_One_trending_game.map((Item, index) => (
                        <Fade left delay={index*50} key={index} >
                            < GameCard item={Item} key={index} />
                        </Fade>
                    )): null} 

                    </Carousel>
                </div>
                ))
            
                : null}
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        PC_trending_game: state.games.PC_trending_game,
        PS4_trending_game: state.games.PS4_trending_game,
        Xbox_One_trending_game: state.games.Xbox_One_trending_game
    }
}

export default connect(mapStateToProps)(Game_Lists);
