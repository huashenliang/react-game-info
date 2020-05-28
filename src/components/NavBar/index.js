// import React from 'react';
// import { Navbar, Nav, NavDropdown, Form, FormControl,Button } from 'react-bootstrap'
//   import { Link } from 'react-router';


// const MainNav = () => {
//     return ( 
//             <Navbar bg="light" expand="lg" fixed="top">
//             <Navbar.Brand href="/">Game Finder</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <NavDropdown title="Game Types" id="basic-nav-dropdown">
//                         <NavDropdown.Item href="/pc_game">PC Games</NavDropdown.Item>
//                         <NavDropdown.Item href="/ps4_game">PS4 Games</NavDropdown.Item>
//                         <NavDropdown.Item href="/xbox">Xbox Games</NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item href="/">All Games</NavDropdown.Item>
//                     </NavDropdown>
//                 </Nav>
//                 <Form inline>
//                 <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                 <Button variant="outline-success">Search</Button>
//                 </Form>
//             </Navbar.Collapse>
//             </Navbar>

//     );
// }
 
// export default MainNav;
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid'
import NotificationsIcon from '@material-ui/icons/Notifications';
import Container from '@material-ui/core/Container';
import TaggleMenu from './manu';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function MainNav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const preventDefault = (event) => event.preventDefault();


  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );


  return (
    <div className={classes.grow} >
      <AppBar position="fixed">
          <Container>
            <Toolbar>
            <Link to='/' style={{ textDecoration: 'none', color:"white"}}>
              <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
              >
                  <Typography className={classes.title} variant="h6" noWrap>
                      Game Finder
                  </Typography>
              </IconButton>
            </Link>
         

            <Grid item xs={6}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Grid>
            <TaggleMenu />
          
            </Toolbar>
        </Container>
      </AppBar>
        {renderMenu}
    </div>
  );
}