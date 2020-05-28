import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ComputerIcon from '@material-ui/icons/Computer';
import {IoLogoPlaystation, IoLogoXbox, IoIosLaptop} from 'react-icons/io';
import { Link } from 'react-router-dom';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  }
  
}))(MenuItem);

export default function TaggleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <SportsEsportsIcon style={{paddingRight: '5%'}}/>
         Games PLATFORMS
      </Button>
      
    
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/pc_games' style={{ textDecoration: 'none', color:"black"}} >
          <StyledMenuItem >
                <ListItemIcon style={{paddingLeft: '2px'}}>
                    <IoIosLaptop />
                </ListItemIcon>
                <ListItemText primary="PC GAMES" />
          </StyledMenuItem>
        </Link>
   
        <Link to='/ps4_games' style={{ textDecoration: 'none', color:"black"}} >
            <StyledMenuItem>
                <ListItemIcon style={{paddingLeft: '2px'}}>
                    <IoLogoPlaystation />
                </ListItemIcon>
                <ListItemText primary="PS4 GAMES" />
            </StyledMenuItem>
        </Link>

        <Link to='/xbox_games' style={{ textDecoration: 'none', color:"black"}} >
            <StyledMenuItem>
                <ListItemIcon style={{paddingLeft: '2px'}}>
                    <IoLogoXbox />
                </ListItemIcon>
                <ListItemText primary="XBOX GAMES" />
            </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}