import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { Home } from '../home/Home'
import { About } from './About'
import { Header } from '../common/Header'

export const Pages = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                </Switch>
            </Router>
        </>
    )
}
