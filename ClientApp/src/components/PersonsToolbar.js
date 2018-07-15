import React, { Component } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

 
const styles = theme => ({    
    button: {
      marginRight: theme.spacing.unit,
    },
  });
  
  
class PersonsToolbar extends Component {
    constructor(props) {
        super(props);

        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
    }

    handleClickAdd() {
        if (this.props.onAdd) {
            this.props.onAdd();
        }
    }

    handleClickClose(id) {
        if (this.props.onClose) {
            this.props.onClose(id);
        }
    }

    render() {
        const { classes } = this.props;
        const disableClose = this.props.selectedPerson === null;
        return (    
            <Toolbar variant="dense" disableGutters={true}>        
                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClickAdd}>Open</Button>
                {this.props.selectedPerson &&
                    <Button variant="contained" className={classes.button} onClick={() => this.handleClickClose(this.props.selectedPerson)} disabled={disableClose}>Close</Button>
                }
            </Toolbar>
        );
    }
}

export default withStyles(styles)(PersonsToolbar);