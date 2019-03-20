import React, { Component } from 'react';
import LightboxProject from "../LightboxProject";

class TicTacToe extends Component {
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
                <div className="project">
                    <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/tictactoe/tictactoenew.png" width='100%' onClick={this.openLightBox}/>
                </div>
            </div>
        );
    }
}

export default TicTacToe;
