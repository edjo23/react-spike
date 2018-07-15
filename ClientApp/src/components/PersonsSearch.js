import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { Button, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PersonsList from './PersonsList';
import PersonService from '../PersonService';

const styles = {

};
  
class PersonsSearch extends React.Component {
    handled;
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            data: null,
        }

        this.servicePromise = new PersonService().getPersons().then(o => {
            this.setState({
                data: o,
            })
        });

    }

    componentWillMount() {
        this.handled = false;
        console.log('PersonSearch - componentWillMount');
    }

    componentDidUpdate() {
        this.handled = false;
        console.log('PersonSearch - componentDidUpdate');
    }

    handleSelect(id) {
        if (this.handled) {
            return;
        }
        this.handled = true;

        if (this.props.onSelect) {
            this.props.onSelect(id);
        }
        this.handleClose();
    }

    handleClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        console.log('PersonSearch - render');
        return (
            <Dialog
                fullwidth="true"
                maxWidth="md"                
                open={this.props.open}
                
            >
                <DialogTitle>Select Person</DialogTitle>
                <Divider />
                
                <DialogContent>
                    {this.state.data && 
                        <PersonsList data={this.state.data} onSelect={this.handleSelect} />
                    }
                </DialogContent>
                <Divider />

                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(styles)(PersonsSearch);