import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Navigation from './components/navbar';

class Routes extends React.Component{
    createRoute(component, path) {
        return (
            <Route 
                key={path}
                render={() => component}
                exact path={path}
            />
        )
    }

    render() {
        return (
            <Router>
                <>
                    <Navigation />
                    { this.createRoute(<Home />, '/') }
                </>
            </Router>
        )
    }
}

export default Routes;