import React, { Component } from 'react';
import queryString from 'query-string';
import MainNav from '../NavBar'
import { connect } from 'react-redux';
import {getGameDetails} from '../../actions/game_actions';
import {Container,Row, Col, Image }from 'react-bootstrap';
import './style.css';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

class Game_Details extends Component {
    state = { }
    
    useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));

    componentDidMount() {
        this.props.dispatch(getGameDetails(queryString.parse(this.props.location.search).id))
    }

    render() { 
        return ( 
            <div>
                {this.props.game_details ? 
                <div className="parallax-container">
                    <div className="parallax-background">
                        {this.props.game_details ? 
                            <img className="screenshot" src={`//images.igdb.com/igdb/image/upload/t_1080p/${this.props.game_details[0].screenshot_id[0]}.jpg`} />
                        :null}
                    </div>
                </div>
                :null
                }
                
      
                <Container  className="gamepage-header-info">
                        <MainNav />
                        {this.props.game_details ? 
                        <div>
                       <Row style={{paddingTop:"15%"}}>
                            <Col xs={6} md={4}>
                                <Image style={{paddingTop: "15%"}}  src={`//images.igdb.com/igdb/image/upload/t_cover_big/${this.props.game_details[0].image_id}.jpg`} rounded />
                            </Col>
                            <Col  xs={6} md={0} className="game-title" >
                                <h1 className="game-name">{this.props.game_details[0].name}</h1>
                                {this.props.game_details[0].genreNames[0] !== " " ? 
                                this.props.game_details[0].genreNames[0].map((item,index)=> 
                                    <h3 key={index} >{item}</h3>                
                                ) :null}
                            </Col>
                            <FullWidthTabs />
                        </Row>
                        <Row>
                           
                        <Col> <h3>{this.props.game_details[0].storyline}</h3></Col>
                        </Row> 

                       
                        </div>
                        : null
                        }
                    </Container>

            
            </div>

    
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        game_details: state.games.Game_details
    }
}

export default connect(mapStateToProps)(Game_Details);