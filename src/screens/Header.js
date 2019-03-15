import React, { Component } from 'react';
import LMHlogo from '../assets/LMHlogo.png';
import { FaGithubSquare, FaBehanceSquare, FaLinkedin, FaEnvelopeSquare  } from "react-icons/fa";




class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <div className="menu-wrapper">
                    <div className="menu-first">
                        <img src={LMHlogo} height={40} width={40} />
                    </div>
                    <div className="menu">
                        About
                    </div>
                    <div className="menu">
                        Project
                    </div>
                    <div className="menu">
                        Resume
                    </div>
                </div>
                <div className="name">
                    Lisa Marie Herzberg
                </div>
                <div className="menu-wrapper">
                        <div>
                            <a href="https://github.com/Lisamarie73187" target="https://github.com/Lisamarie73187"><FaGithubSquare className="icon"/></a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/lisaherzberg/" target="https://www.linkedin.com/in/lisaherzberg/"><FaLinkedin className="icon"/></a>
                        </div>
                        <div>
                            <a href="https://www.behance.net/lherzber0f53" target="https://www.behance.net/lherzber0f53"><FaBehanceSquare className="icon"/></a>
                        </div>
                        <div>
                            <a  href="mailto:lisamarieherzberg@gmail.com"><FaEnvelopeSquare className="icon"/></a>
                        </div>
                </div>
            </div>
        );
    }
}

export default Header;
