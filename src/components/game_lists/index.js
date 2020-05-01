import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { getPCTrandingGame } from '../../actions/game_actions';

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
        }
    }

    componentDidMount() {
        this.props.dispatch(getPCTrandingGame(
            this.state.platform["pc"]
        ))
    }

    render() { 
        return ( 
        <div className="div">
            <h1 className="heading">
                Trending Games
            </h1>
            <Carousel
                swipeable={false}
                draggable={false}
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
                {/* {for(i => (
                    <div key={i}>
                     <Card style={{ width: '18rem'}}>
                         <Card.Img variant="top" src="holder.js/100px180" />
                         <Card.Body>
                             <Card.Title>1</Card.Title>
                             <Card.Text>
                             Some quick example text to build on the card title and make up the bulk of
                             the card's content.
                             </Card.Text>
                             <Button variant="primary">Go somewhere</Button>
                         </Card.Body>
                     </Card>
                 </div>
                ))} */}
               
               
             
               <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>2</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
               <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>2</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>2</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>3</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>4</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> 
        
          </Carousel>
          </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(Game_Lists);
