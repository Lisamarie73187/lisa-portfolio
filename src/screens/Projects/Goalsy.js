import React, { Component } from 'react';
import LightboxProject from "../LightboxProject";
import Carousel from 'nuka-carousel';




const images = [
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/goalsy/goalsyMainSliderPage.png',
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/goalsy/goalsySliderFeatures.png',
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/goalsy/goalsyBackgroundSlider.png',
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/goalsy/GoalsyMobileSlider4.png'

]

class Goalsy extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            hover: false,
            openModal: false
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

    openLastSlide = () => {
        this.close()
        this.setState({
            openModal: true
        })
    }

    render() {
        return (
            <div>

                <LightboxProject open={this.state.open} close={this.close} images={images} openLastSlide={this.openLastSlide}/>
                <div className="project">
                    {!this.state.hover ? (
                        <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/goalsy/GoalsyThumbNail.png" width='100%' onMouseOver={this.hover} onMouseOut={this.hoverOut}/>
                    ) : (
                        <div  onMouseOver={this.hover} onMouseOut={this.hoverOut} onClick={this.openLightBox} >
                            <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/goalsy/GoalsyThumbNailHoverOverlay.png" width='100%' />
                        </div>
                    )
                    }
                </div>
                {this.state.openModal &&
                <div>Sample</div>
                }
            </div>
        );
    }
}

export default Goalsy;
