import React, { Component } from 'react';
import PersonsToolbar from './PersonsToolbar';
import PersonsSearch from './PersonsSearch';
import PersonService from '../PersonService';
import PersonDetail from './PersonDetail';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
  
export default class Persons extends Component {
    personService;

    constructor(props) {
        super(props);
        this.personService = new PersonService();

        const tabs = this.personService.getStash();

        this.state = {
            searchOpen: false,
            tabs: this.personService.state.open,
            selectedPerson: this.personService.state.active,
        };

        this.handleSearchOpen = this.handleSearchOpen.bind(this);
        this.handleSearchSelect = this.handleSearchSelect.bind(this);
        this.handleSearchClose = this.handleSearchClose.bind(this);
        this.handleTabsChange = this.handleTabsChange.bind(this);
        this.handlePersonClose = this.handlePersonClose.bind(this);        
    }

    handleSearchOpen() {
        this.setState({
            searchOpen: true,
        });
    }

    handleSearchSelect(id) {
        var existing = this.personService.state.open.find(o => o.id === id);
        if (!existing) {
            const tab = { 
                id,
                loading: true,
                model: null,
            };

            this.personService.state.open.push(tab);

            this.personService.getPerson(id)
                .then(o => {
                    tab.model = o;
                    this.forceUpdate();
                });
        }

        this.personService.state.active = id;

        this.setState({
            tabs: this.personService.state.open,
            selectedPerson: this.personService.state.active,
        });
    }

    handleSearchClose() {        
        this.setState({
            searchOpen: false,
        });
    }

    handleTabsChange(e, value) {
        this.personService.state.active = value;
        this.setState({
            selectedPerson: this.personService.state.active,
        });
    }

    handlePersonClose(id) {        
        var tab = this.personService.state.open.find(o => o.id === id);
        var i = this.personService.state.open.indexOf(tab);

        if (i >= 0) {
            this.personService.state.open.splice(i, 1);
            this.personService.state.active = this.personService.state.open.length > 0 ? this.personService.state.open[0].id : null;
        }

        this.setState({
            tabs: this.personService.state.open,
            selectedPerson: this.personService.state.active,
        });
    }

    render() {
        const tab = this.personService.state.open.find(o => o.id === this.state.selectedPerson);
        return (
            <div>
                <PersonsToolbar selectedPerson={this.state.selectedPerson} onAdd={this.handleSearchOpen} onClose={this.handlePersonClose} />
                {this.state.searchOpen &&
                    <PersonsSearch open={this.state.searchOpen} onSelect={this.handleSearchSelect} onClose={this.handleSearchClose} />                
                }
                {this.state.tabs.length > 0 && 
                    <React.Fragment>
                        <Tabs
                            value={this.state.selectedPerson}
                            onChange={this.handleTabsChange}
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            {this.state.tabs.map(o => (
                                <Tab key={o.id} value={o.id} label={o.model ? o.model.name : 'Loading...'} />
                            ))}
                        </Tabs>

                        {tab && 
                            <PersonDetail model={tab.model} />
                        }
                    </React.Fragment>
                }
            </div>
        );
    }
}
