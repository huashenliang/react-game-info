import React, { Component } from 'react';
import queryString from 'query-string';
import MainNav from '../NavBar'
import { connect } from 'react-redux';
import {getGameDetails} from '../../actions/game_actions';

import {Container, AppBar, Tabs, Tab, Typography, Box, makeStyles, useTheme, Grid, Link}from '@material-ui/core';
import Circle from 'react-circle';
import {Image} from 'react-bootstrap';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import './style.css';

const catergoryIDs = {
  1: "official",
  2: "wikia",
  3: "wikipedia",
  4: "facebook",
  5: "twitter",
  6: "twitch",
  8: "instagram",
  9: "youtube",
  10: "iphone",
  11: "ipad",
  12: "android",
  13: "steam",
  14: "reddit",
  15: "itch",
  16: "epicgames",
  17: "gog",
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

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
    width: 800,
  },
}));

function FullWidthTabs(props) {
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
      {console.log(props)}
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Storyline" {...a11yProps(0)} />
          <Tab label="Summary" {...a11yProps(1)} />
          <Tab label="Other Links" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {props.storyline ? props.storyline : 'Sorry, this game does not have a storyline'}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {props.summary}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {props.urls ? props.urls.map((item,index) => (
            <div key={index}>             
                <p>{capitalize(catergoryIDs[item.category])}:   
                  <Link href={item.url}  color={'secondary'} style={{paddingLeft: '2%'}}>
                      {item.url}  
                  </Link>
                </p>
            </div>
     
          )) 
          :null}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

class Game_Details extends Component {
    
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
                <MainNav />
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
                      {this.props.game_details ? 
                        <div>
                       <Grid container spacing={1}style={{paddingTop:"15%"}}>
                            <Grid  item xs={6} sm={3}>
                                <Image style={{paddingTop: "15%"}}  src={`//images.igdb.com/igdb/image/upload/t_cover_big/${this.props.game_details[0].image_id}.jpg`} rounded />
                            </Grid >

                            <Grid   item xs={6} sm={3} className="game-title" >
                                <h1 className="game-name">{this.props.game_details[0].name}</h1>
                                {this.props.game_details[0].genreNames[0] !== " " ? 
                                this.props.game_details[0].genreNames[0].map((item,index)=> 
                                    <h3 key={index} >{item}</h3>                
                                ) :null}

                                <FullWidthTabs 
                                  storyline={this.props.game_details[0].storyline} 
                                  summary={this.props.game_details[0].summary} 
                                  urls={this.props.game_details[0].websites_URLs[0]}
                                />
                            </Grid >

                            <Grid item xs={6} sm={3} style={{paddingLeft: '25%', alignItems:'center'}}>
                              <div style={{alignItems:'center', tex:'center'}}>
                                {this.props.game_details[0].total_rating ?
                                 <Circle 
                                 progress={this.props.game_details[0].total_rating.toFixed(2)} 
                                 size={150}
                                 lineWidth={25}
                               /> : null
                                }
                              </div>
                             </Grid > 
                        </Grid >
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