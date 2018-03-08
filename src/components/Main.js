import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import About from './About';
import Contactme from './Contactme';

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/'} component={Portfolio}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/contacts'} component={Contactme}/>
            </Switch>
        )
    }
}