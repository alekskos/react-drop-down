import React, { Component } from 'react';

const Context = React.createContext();
class Provider extends Component {
    state = {
        chiefExecutive: 'Charlie Waite',
    };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export class ContextApp extends Component {
    render() {
        return (
            <Provider>
                <Company />
            </Provider>
        );
    }
}
const Company = (props) => {
    return (
        <Department />
    );
};
const Department = (props) => {
    return (
        <Team />
    );
};
const Team = (props) => {
    return (
        <Context.Consumer>
            {(context) => (
                <p>Our CEO is {context.chiefExecutive} </p>
            )}
        </Context.Consumer>
    );
};