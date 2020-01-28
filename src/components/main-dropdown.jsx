import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';

import instagram from '../images/icons/instagram.svg';
import twitter from '../images/icons/twitter.svg';
import mail from '../images/icons/mail.svg';

class MainDropdown extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
        };
        this.showMenu = this.showMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    showMenu(e) {
        console.log(e);
        this.setState({
            show: true,
        });
    }

    hideMenu(e) {
        console.log(e);
        this.setState({
            show: false,
        });
    }

    handleClick(e) {
        console.log(e);
        let newState = !this.state.show;
        this.setState({
            show: newState
        })
    }

    render() {
        return (
            <div
                role="button"
                tabIndex="0"
                className="lg:relative"
                onClick={isMobile ? this.handleClick : undefined}
                onMouseEnter={isMobile ? undefined : this.showMenu}
                onMouseLeave={this.hideMenu}
            >
                {this.props.children}

                {this.state.show &&
                    /* menu items */ 
                    <div className="bg-white rounded absolute right-0 pl-8 pr-2 overflow-hidden">
                        {/* single row */}
                        <div className="flex justify-end hover:text-main pb-2 text-sm lg:text-base">
                            <a 
                                className="mr-6"
                                href="https://twitter.com/kimberlykemler"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @KimberlyKemler
                            </a>
                            <img src={twitter} alt="twitter"></img>
                        </div>
                        {/* single row */}
                        <div className="flex justify-end hover:text-main pb-2 text-sm lg:text-base">
                            <a
                                className="mr-6"
                                href="https://www.instagram.com/kmykem/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @kmykem
                            </a>
                            <img src={instagram} alt="instagram"></img>
                        </div>
                        {/* single row */}
                        <div className="flex justify-end hover:text-main text-sm lg:text-base">
                            <a className="mr-6" href="mailto:kkemler115@gmail.com">
                                kkemler115@gmail.com
                            </a>
                            <img src={mail} alt="mail"></img>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MainDropdown;
