import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { getPCTrandingGame, getPS4TrandingGame, getXboxOneTrandingGame } from '../../actions/game_actions';

import Carousel from 'react-multi-carousel';
import WithStyles from 'react-multi-carousel'
import './style.css';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
        platform: {
            "pc": 6,
            "ps4": 48,
            "xboxOne": 49
        },
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
            {this.props.PC_trending_game !== undefined &&
            this.props.PS4_trending_game !== undefined &&
            this.props.Xbox_One_trending_game !== undefined
            ?
            this.state.heading.map(i => (
                <div> 
                <h1 className="heading">{i}</h1>
                <Carousel
                swipeable={false}
                draggable
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={3000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {i === 'Trending PC Games' ? this.props.PC_trending_game.map((Item, index) => (
                    <Card key={index} className="card">
                        <Card.Img variant="top" src={`//images.igdb.com/igdb/image/upload/t_cover_big/${Item.image_id}.jpg`} />
                        <Card.Body>
                            <Card.Title>{Item.name}</Card.Title>
                            {/* <Card.Text>
                                {Item.summary.length < 150 ? Item.summary
                                :`${Item.summary.substring(0, 150)} ... `}
                            </Card.Text> */}
                            <Button variant="primary" href={`/game_details/?id=${Item.id}`}>Game Details</Button>
                        </Card.Body>
                    </Card> 
                )): null} 

                {i === 'Trending PS4 Games' ? this.props.PS4_trending_game.map((Item, index) => (
                    <Card key={index} className="card">
                        <Card.Img variant="top" src={`//images.igdb.com/igdb/image/upload/t_cover_big/${Item.image_id}.jpg`} />
                        <Card.Body>
                            <Card.Title>{Item.name}</Card.Title>
                            <Button variant="primary" href={`/game_details/?id=${Item.id}`}>Game Details</Button>
                        </Card.Body>
                    </Card> 
                )): null} 
                
                {i === 'Trending XboxOne Games' ? this.props.Xbox_One_trending_game.map((Item, index) => (
                    <Card key={index} className="card">
                        <Card.Img variant="top" src={`//images.igdb.com/igdb/image/upload/t_cover_big/${Item.image_id}.jpg`} />
                        <Card.Body>
                            <Card.Title>{Item.name}</Card.Title>
                            <Button variant="primary" href={`/game_details/?id=${Item.id}`}>Game Details</Button>
                        </Card.Body>
                    </Card> 
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