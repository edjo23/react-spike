import React, { Component } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import PersonService from '../PersonService';

export default class PersonsList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        if (this.props.onSelect) {
            this.props.onSelect(e);
        }
    }
    render() {
        const data = this.props.data;
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell numeric>Calories</TableCell>
                        <TableCell numeric>Fat (g)</TableCell>
                        <TableCell numeric>Carbs (g)</TableCell>
                        <TableCell numeric>Protein (g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => (
                        <TableRow key={n.id} hover onClick={() => this.handleClick(n.id)}>
                            <TableCell component="th" scope="row">
                            {n.name}
                            </TableCell>
                            <TableCell numeric>{n.calories}</TableCell>
                            <TableCell numeric>{n.fat}</TableCell>
                            <TableCell numeric>{n.carbs}</TableCell>
                            <TableCell numeric>{n.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        );
    }
}