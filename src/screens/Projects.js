import React, { Component } from 'react';
import LightboxProject from "./LightboxProject";

class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
        }
    }

    openLightBox = () => {
        this.setState({
            open: !this.state.open
        })
    }

    close = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <div>
                <LightboxProject open={this.state.open} close={this.close}/>
                <div className="project-wrapper">
                    <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/goalsyslider/REXSMALLOM.png" width='45.5%' className="project" onClick={this.openLightBox}/>
                    <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/rex/rex.png" width='45.5%' className="project"/>
                </div>
                {/*<div>*/}
                    {/*<img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/gyft/longgyft.png" width='91.5%' className="project-gyft"/>*/}
                {/*</div>*/}
                {/*<div className="project-wrapper-two">*/}
                    {/*<img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/tictactoe/tictactoenew.png" width='45.5%' className="project"/>*/}
                    {/*<img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/rex/rex.png" width='45.5%' className="project"/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Projects;
