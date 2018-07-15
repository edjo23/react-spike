import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import NavMenu from './NavMenu';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 0,
    padding: theme.spacing.unit,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class Layout extends Component {
  displayName = Layout.name

  render() {
    const { classes } = this.props;

    

    return (
      <div className={classes.root}>
        <NavMenu />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>{this.props.children}</div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);