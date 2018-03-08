import React, { Component } from 'react';
import './Portfolio.css';

const images = [
    {
        title: 'First one',
        describtion: 'lorem ipsum somethign else to say that this one is very important one in the world, beatch',
        url: 'https://cdn.vox-cdn.com/thumbor/dNpPmyTlFAhfMO114LV5-TgxJ2c=/0x0:1280x779/1200x800/filters:focal(538x288:742x492)/cdn.vox-cdn.com/uploads/chorus_image/image/54681785/Kiev_Apt_MARTIN_architects_1.0.jpg',
    }, {
        title: 'Second one',
        describtion: 'lorem ipsum somethign else to say that this one is very important one in the world, beatch',
        url: 'https://images.homify.com/images/a_0,c_fill,f_auto,h_900,q_auto,w_1920/v1438886046/p/photo/image/402660/notting_hill_-_living_room/classic-living-room-photos-by-lli-design.jpg',
    }, {
        title: 'Third one',
        describtion: 'lorem ipsum somethign else to say that this one is very important one in the world, beatch',
        url: 'https://i.ytimg.com/vi/rMxTreSFMgE/maxresdefault.jpg',
    }
//    'http://mybktouch.com/wp-content/uploads/2017/03/interior-design-ideas-for-your-modern-home-design-milk-in-interior-design-decorating-open-interior-design-with-decorative-wall-divider.jpg',
//    'http://mybktouch.com/wp-content/uploads/2017/03/interior-design-mybktouch-within-interior-design-decorating-open-interior-design-with-decorative-wall-divider.jpg',
//    'http://mybktouch.com/wp-content/uploads/2017/03/interior-design-modern-bathroom-bath-chair-design-intended-for-interior-design-decorating-open-interior-design-with-decorative-wall-divider.jpg',
//    'http://mybktouch.com/wp-content/uploads/2017/03/hiring-an-interior-designer-interior-design-7-ideas-of-hire-intended-for-interior-design-decorating-open-interior-design-with-decorative-wall-divider.jpg',
//    'http://mybktouch.com/wp-content/uploads/2017/07/Modern-Kitchen-Designs.jpg',
//    'http://mybktouch.com/wp-content/uploads/2017/07/floor-Modern-Kitchen-Designs.jpg'
]

export default class Portfolio extends Component {
    render () {
        return (
            <div id="Portfolio" className="title">
                <h3><span>Портфолио</span></h3>
                <div id="glr">
                {
                    images.map((img, index) => {
                        return (
                        <div className="container" key={index}>
                            <img alt={`img${index}`} src={img.url}/>
                            <b>{img.title}</b>
                            <p>{img.describtion}</p>
                        </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}