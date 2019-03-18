import React, { Component } from 'react';
import Goalsy from './Projects/Goalsy'
import Rex from './Projects/Rex'
import Gyft from './Projects/Gyft'
import TicTacToe from "./Projects/TicTacToe";
import Scentric from "./Projects/Scentric";





class ProjectContainer extends Component {
    render() {
        return (
            <div className="project-wrapper">
                <div className="first-row-projects">
                    <Goalsy/>
                    <Rex/>
                </div>
                <div>
                    <Gyft/>
                </div>
                <div className="first-row-projects">
                    <TicTacToe/>
                    <Scentric/>
                </div>
            </div>
        );
    }
}

export default ProjectContainer;
