import React, {Component} from 'react';
import './Menu.css';

export class Menu extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.dropdownMenu = React.createRef();
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu)
        });
    }
    closeMenu(e) {
        if (!this.dropdownMenu.current.contains(e.target)) {
            this.setState({showMenu: false}, () => {
                document.removeEventListener('click', this.closeMenu)
            });
        }
    }

    render() {
        return (
            <div>
                <button
                    className="menu__button"
                    onClick={this.showMenu}>
                    Show menu
                </button>
                {
                    this.state.showMenu && (
                        <div
                            className="menu__items"
                            ref={this.dropdownMenu}>
                            <button>Menu item 1</button>
                            <button>Menu item 2</button>
                            <button>Menu item 3</button>
                        </div>
                    )
                }
            </div>
        );
    }
}