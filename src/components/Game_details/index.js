import React, { Component } from 'react';
import queryString from 'query-string';
import MainNav from '../NavBar'
import { connect } from 'react-redux';
import {getGameDetails} from '../../actions/game_actions';
import {Container, Row, Col, Image} from 'react-bootstrap';

class Game_Details extends Component {
    state = { }

    componentDidMount() {
        this.props.dispatch(getGameDetails(queryString.parse(this.props.location.search).id))
    }

    render() { 
        return ( 
            <Container>
                 <MainNav />
                 {this.props.game_details ? 
                <Row style={{paddingTop:"15%"}}>
                     <Col xs={6} md={4}>
                        <Image style={{paddingTop: "15%"}}  src={`//images.igdb.com/igdb/image/upload/t_cover_big/${this.props.game_details[0].image_id}.jpg`} rounded />
                     </Col>
                     <Col  xs={6} md={0}>
                        <h1 style={{paddingTop:"20%"}}>{this.props.game_details[0].name}</h1>
                        {this.props.game_details[0].genreNames[0] !== " " ? 
                        this.props.game_details[0].genreNames[0].map((item,index)=> 
                            <h3 key={index}>{item}</h3>                
                        ) :null}
                     </Col>
                </Row>
                : null
                }
            </Container>

        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        game_details: state.games.Game_details
    }
}

export default connect(mapStateToProps)(Game_Details);