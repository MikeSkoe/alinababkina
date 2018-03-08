import React, { Component } from 'react';
import '../App.css';
import './Head.css';
import { Link } from 'react-router-dom';

export default class Head extends Component {
    render () {
        return (
            <div className="Head img">
                <div>
                    <h1>Алина Бабкина</h1>
                    <p>дизайн интерьера</p>
                </div>
                <div className="btns">
                    <Link to={'/alinababkina/'} className="btn">портфолио</Link>
                    <Link to={'/alinababkina/about'} className="btn">о дизайнере</Link>
                    <Link to={'/alinababkina/contacts'} className="btn">контакты</Link>
                </div>
            </div>
        )
    }
}