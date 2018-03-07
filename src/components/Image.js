import React from "react";

import './Image.css';

export default class Image extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundImage: `url(${props.link})`
        }
    }
    render() {
        return (
            <div style={this.state} className="Image"></div>
        )
    }
}