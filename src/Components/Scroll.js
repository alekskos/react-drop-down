import React, { Component } from 'react';
import axios from 'axios';
export class Scroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 20,
            loading: false,
            photos: [],
            src: ''
        };
    }
    showItems() {
        let items =[];
        const appId = '6a4ddc7f105347c2e64c4f68b790a08d191040b6062197a62f42cb7a93b9d0f2';
        axios.get(`https://api.unsplash.com/photos/?client_id=${appId}`)
            .then(response => this.setState({ photos: response.data }));
        for (let i = 0; i < this.state.items; i++) {
            // console.log(this.state.photos);
            // items.push(<img src={this.state.src} alt="" />);
        }
        return items;
    }
    render() {
        return (
            <div
                ref="myScroll"
                style={{ height: 200, overflow: "auto" }}>
                <ul>
                    {this.showItems()}
                </ul>
                {this.state.loading &&
                <p>
                    loading...
                </p>}
            </div>
        );
    }
}