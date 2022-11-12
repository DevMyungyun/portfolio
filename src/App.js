import React, {useState} from 'react';
import {HashRouter, Router, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Home from './components/Home';

function App() {
    
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <HashRouter>
                        <Navigation/>
                    </HashRouter>
                </div>
            </header>
            <body>
                <h1>this is Body</h1>
                <div>hello this is contents</div>
                
            </body>
        </div>
    );
}

export default App;
