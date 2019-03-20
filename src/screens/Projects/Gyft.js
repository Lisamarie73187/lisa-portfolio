import React, { Component } from 'react';
import LightboxProject from "../LightboxProject";

const images = [
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/gyft/GyftHomeSlider1.png',
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/gyft/gyftpage2.png',
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/gyft/GyftTech3.png'
]

class Gyft extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            hover: false
        }
    }

    openLightBox = () => {
        this.setState({
            open: !this.state.open
        })
    };

    close = () => {
        this.setState({
            open: !this.state.open
        })
    };

    hover = () => {
        this.setState({
            hover: true
        })
    };

    hoverOut = () => {
        this.setState({
            hover: false
        })
    };

    render() {
        return (
            <div>
                <LightboxProject open={this.state.open} close={this.close} images={images}/>
                <div className="project" onClick={this.openLightBox}>
                    {!this.state.hover ? (
                        <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/gyft/GyftThumbNail.png" width='100%' onMouseOver={this.hover} onMouseOut={this.hoverOut}/>
                    ) : (
                        <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/gyft/GyftThumbNailHiover.png" width='100%' onMouseOver={this.hover} onMouseOut={this.hoverOut}/>
                    )
                    }
                </div>
            </div>
        );
    }
}

export default Gyft;
