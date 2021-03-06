import React, { Component } from 'react';
import LightboxProject from "../LightboxProject";

const images = [
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/tictactoe/tictactoesliderone.png',
    'https://s3-us-west-1.amazonaws.com/portfoliolisa/tictactoe/tictactoeslider2.png'
]

class TicTacToe extends Component {
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
                        <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/tictactoe/tictactoethumbnail.png" width='100%' onMouseOver={this.hover} onMouseOut={this.hoverOut}/>
                    ) : (
                        <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/tictactoe/tictactoethumbnailhover.png" width='100%' onMouseOver={this.hover} onMouseOut={this.hoverOut}/>
                    )
                    }
                </div>
            </div>
        );
    }
}

export default TicTacToe;
