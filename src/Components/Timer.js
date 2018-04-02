import React, { Component } from 'react';

export class Timer extends Component{
    constructor() {
        super();
        this.state = {
            time: null,

        }
    }
    componentDidMount() {
        setInterval( () => {
            this.setState({
                time : new Date().toLocaleTimeString('ru')
            })
        }, 1000)
    }
    render(){
        return (
            <div>
                <h2>It is {this.state.time}</h2>
            </div>
        );
    }
}