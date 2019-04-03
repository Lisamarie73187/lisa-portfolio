import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


export default class LightboxProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
        };
    }

    onNext = () => {
        if(this.props.images.length - 1 === this.state.photoIndex){
            this.props.openLastSlide()
        }
        console.log(this.props.images.length)
        console.log(this.state.photoIndex)
        this.setState({
            photoIndex: (this.state.photoIndex + 1) % this.props.images.length,
        })
    }

    render() {
        const { photoIndex} = this.state;
        const { images } = this.props;

        return (
            <div>
                {this.props.open && (
                    <Lightbox
                        enableZoom={false}
                        imagePadding={50}
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={this.props.close}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={this.onNext}
                    />
                )}
            </div>
        );
    }
}