import React, { Component } from 'react';
import { Typography, TextField } from '@material-ui/core';

export default class PersonDetail extends Component {
    constructor(props) {
        super(props);
        console.log('PersonDetail - in constructor');
    }
    render() {
        console.log('PersonDetail - render', this.props);

        if (this.props.model) {
            return (
                <div>
                    <br />
                    <Typography variant="title">{this.props.model.name}</Typography>
                    <TextField
                        id="name"
                        label="Name"
                        value={this.props.model.name}
                        margin="normal"
                        fullWidth
                        disabled
                    />
                    <TextField
                        id="name"
                        label="Calories"
                        value={this.props.model.calories}
                        margin="normal"
                        fullWidth
                        disabled
                    />
                    <TextField
                        id="name"
                        label="Fat"
                        value={this.props.model.fat}
                        margin="normal"
                        fullWidth
                        disabled
                    />
                    <TextField
                        id="name"
                        label="Carbs"
                        value={this.props.model.carbs}
                        margin="normal"
                        fullWidth
                        disabled
                    />
                    <TextField
                        id="name"
                        label="Protein"
                        value={this.props.model.protein}
                        margin="normal"
                        fullWidth
                        disabled
                    />                    
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <Typography variant="body1">Loading...</Typography>
                </div>
            );
        }
    }
}