import React, { Component } from 'react';
import LightboxProject from "../LightboxProject";

const images = [
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/rex/RexSliderHome1.png',
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/rex/RexAboutSlider2.png',
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/rex/RexSliderTech3.png'
]

class Rex extends Component {
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
                        <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/rex/rex.png" width='100%' onMouseOver={this.hover} onMouseOut={this.hoverOut}/>
                    ) : (
                        <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/rex/RexThumbnailhover.png" width='100%' onMouseOver={this.hover} onMouseOut={this.hoverOut}/>
                    )
                    }
                </div>
            </div>
        );
    }
}

export default Rex;
