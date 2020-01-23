import React, { Component } from "react";
import { Link } from "gatsby"

class MainDropdown extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    showMenu() {
        this.setState({
            show: true
        });
    }

    hideMenu() {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <div
                className="relative"
                onMouseEnter={this.showMenu}
                onMouseLeave={this.hideMenu}
                >
                {this.props.children}
                {this.state.show &&
                    /* menu items */
                    <div className="bg-white rounded absolute right-0">
                        {/* single row */}
                        <div className="flex justify-end">
                            <div className="mr-4">twitter</div>
                            <div>icon</div>
                        </div>
                        {/* single row */}
                        <div className="flex justify-end">
                            <div className="mr-4">instagram</div>
                            <div>icon</div>
                        </div>
                        {/* single row */}
                        <div className="flex justify-end">
                            <div className="mr-4">email</div>
                            <div>icon</div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default MainDropdown;