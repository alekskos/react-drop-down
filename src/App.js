import React, {Component} from 'react';
import './App.css';
import {Menu} from './Components/Menu';
import {Timer} from './Components/Timer';
import {Input} from './Components/Input';
// import {Scroll} from './Components/Scroll';
import { ContextApp } from './Components/Context'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <Timer />
                <Input />
                {/*<Scroll />*/}
                <ContextApp />
            </div>
        );
    }
}

export default App;
