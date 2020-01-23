import React, { Component } from "react";


import instagram from "../images/icons/instagram.svg";
import twitter from "../images/icons/twitter.svg";
import mail from "../images/icons/mail.svg";

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
                    <div className="bg-white rounded absolute right-0 pl-8 pr-2">
                        {/* single row */}
                        <div className="flex justify-end hover:text-main mb-2">
                            <a className="mr-6" href="https://twitter.com">twitter</a>
                            <img src={twitter} alt="twitter"></img>
                        </div>
                        {/* single row */}
                        <div className="flex justify-end hover:text-main mb-2">
                            <a className="mr-6" href="https://www.instagram.com/kmykem/">instagram</a>
                            <img src={instagram} alt="instagram"></img>
                        </div>
                        {/* single row */}
                        <div className="flex justify-end hover:text-main">
                            <a className="mr-6" href="#">email</a>
                            <img src={mail} alt="mail"></img>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default MainDropdown;