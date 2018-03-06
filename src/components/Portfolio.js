import React, { Component } from 'react';
import './Portfolio.css';

const styling = {
    color: 'gray',
    marginTop: '5px'
}

function backImg (url) {
    return {
        background: `url(${url})`
    }
}

const images = [
    'http://www.momentumauctions.com/wp-content/uploads/2017/09/Kiev_Apt_MARTIN_architects_1.0.jpg',
    'http://mybktouch.com/wp-content/uploads/2017/03/new-picture-interior-design-photos-interior-home-design-ideas-in-interior-design-decorating-open-interior-design-with-decorative-wall-divider.jpg',
    'http://mybktouch.com/wp-content/uploads/2017/03/interior-design-you-wont-believe-this-home-is-only-1100-square-for-interior-design-decorating-open-interior-design-with-decorative-wall-divider.jpg',
    'http://mybktouch.com/wp-content/uploads/2017/03/interior-design-ideas-for-your-modern-home-design-milk-in-interior-design-decorating-open-interior-design-with-decorative-wall-divider.jpg',
    'http://mybktouch.com/wp-content/uploads/2017/03/interior-design-mybktouch-within-interior-design-decorating-open-interior-design-with-decorative-wall-divider.jpg',
    'http://mybktouch.com/wp-content/uploads/2017/03/interior-design-modern-bathroom-bath-chair-design-intended-for-interior-design-decorating-open-interior-design-with-decorative-wall-divider.jpg',
    'http://mybktouch.com/wp-content/uploads/2017/03/hiring-an-interior-designer-interior-design-7-ideas-of-hire-intended-for-interior-design-decorating-open-interior-design-with-decorative-wall-divider.jpg',
    'http://mybktouch.com/wp-content/uploads/2017/07/Modern-Kitchen-Designs.jpg'
//    'http://mybktouch.com/wp-content/uploads/2017/07/floor-Modern-Kitchen-Designs.jpg'
]

export default class Portfolio extends Component {
    render () {
        return (
            <div id="Portfolio">
                <h3>Галерея работ</h3>
                <p style={styling}>Коллекция моих лучших работ</p>
                <div id="glr">
                {
                    images.map(img => {
                        return <div className="img"><img url={img}/></div>
                    })
                }
                </div>
            </div>
        )
    }
}