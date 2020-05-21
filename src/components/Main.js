import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Main;