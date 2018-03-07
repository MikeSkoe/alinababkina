import React from 'react';

import './About.css'

export default class About extends React.Component {
    render () {
        return (
            <div id="About" className="title">
                <h3><span>О дизайнере</span></h3>
                <div className="container">
                    <div id="avatar"></div>
                    <p>
                        lorem ipsum something else
                    </p>
                </div>
            </div>
        )
    }
}