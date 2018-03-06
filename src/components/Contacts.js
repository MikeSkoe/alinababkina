import React from 'react';

import './Contacts.css';

const styling = {
    background: 'rgb(50,50,50)',
    width: '100vh',
    height: '30vh',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
    padding: '50px'
}

const divv = {
    width: '50px',
    heigth: '50px',
    backgroundSize: 'cover',
}

const contacts = [
    {
        title: 'https://image.flaticon.com/icons/svg/25/25684.svg',
        description: 'id140159799',
        link: 'https://vk.com/id140159799'
    }, {
        title: 'https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png',
        description: '@alyabk_',
        link: 'https://www.instagram.com/alyabk_/'

    }, {
        title: 'https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png',
        description: 'Номер: +7 962 820-23-02',

    }
]

export default class Contacts extends React.Component {
    render() {
        return (
            <div style={styling}>
                <h1>Подписывайся на меня</h1>
                {contacts.map((cont, index) => {
                    return (<div className='source'>
                        <img src={cont.title} style={divv}/>
                        {cont.link ? <a href={cont.link}>{cont.description}</a> : <span>{cont.description}</span>}
                        <br/><br/>
                    </div>)
                })}
            </div>
        )
    }
}