import React, { Component } from 'react';
import '../App.css';
import './Head.css';

import Portfolio from './Portfolio';

export default class Head extends Component {
    render () {
        return (
            <div className="Head">
                <div className="btns">
                    <button type="button" className="btn">портфолио</button>
                    <button type="button" className="btn">о дизайнере</button>
                    <button type="button" className="btn">контакты</button>
                </div>
                <div>
                    <h1>Алина Бабкина</h1>
                    <p>дизайнер интерьера</p>
                </div>
            </div>
        )
    }
}