import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from '@material-ui/core';
import { Home, SendIcon } from '@material-ui/icons';
import zIndex from '@material-ui/core/styles/zIndex';
import { withStyles } from '@material-ui/core/styles';
import routes from '../routerService';

const drawerWidth = 48;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    overflowX: 'hidden',
    width: theme.spacing.unit * 7,
    paddingLeft: theme.spacing.unit * 1.5,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: theme.mixins.toolbar,
});

class NavMenu extends Component {
  displayName = NavMenu.name;
  
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Demo
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          
          <MenuList>
            {routes.map(o => (
              <NavLink key={o.path} to={o.path}>
                <IconButton>
                  <Home />
                </IconButton>
                {/* <MenuItem>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={o.text} />
                </MenuItem> */}
              </NavLink>
            ))}            
          </MenuList>         
        </Drawer>
      </React.Fragment>


      // <Navbar inverse fixedTop fluid collapseOnSelect>
      //   <Navbar.Header>
      //     <Navbar.Brand>
      //       <Link to={'/'}>React.Demo</Link>
      //     </Navbar.Brand>
      //     <Navbar.Toggle />
      //   </Navbar.Header>
      //   <Navbar.Collapse>
      //     <Nav>
      //       <LinkContainer to={'/'} exact>
      //         <NavItem>
      //           <Glyphicon glyph='home' /> Home
      //         </NavItem>
      //       </LinkContainer>
      //       <LinkContainer to={'/counter'}>
      //         <NavItem>
      //           <Glyphicon glyph='education' /> Counter
      //         </NavItem>
      //       </LinkContainer>
      //       <LinkContainer to={'/fetchdata'}>
      //         <NavItem>
      //           <Glyphicon glyph='th-list' /> Fetch data
      //         </NavItem>
      //       </LinkContainer>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>
      
    );
  }
}
export default withStyles(styles)(NavMenu);
