import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import About from './About';

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Portfolio}/>
                <Route path={process.env.PUBLIC_URL + '/about'} component={About}/>
            </Switch>
        )
    }
}