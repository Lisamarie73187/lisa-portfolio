import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="project-wrapper">
                    <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/goalsyslider/REXSMALLOM.png" width='45.5%' className="project"/>
                    <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/rex/rex.png" width='45.5%' className="project"/>
                </div>
                <div>
                    <img src="https://s3-us-west-1.amazonaws.com/portfoliolisa/gyft/longgyft.png" width='91.5%' className="project-gyft"/>
                </div>
            </div>
        );
    }
}

export default Projects;
