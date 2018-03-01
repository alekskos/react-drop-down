import React, { Component } from 'react';

export class Timer extends Component{
    constructor() {
        super();
        this.state = { time: new Date().toLocaleTimeString()};
    }
    render() {
        return (
            <div>
                <h2>It is {this.state.time}</h2>
            </div>
        );
    }
}