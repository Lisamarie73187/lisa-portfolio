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
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}