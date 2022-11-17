import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

import storage from "./storage.json";
import Home from './routes/Home';
import About from './routes/About';
import Career from './routes/Career';
import Portfolio from './routes/Portfolio';
import Contact from './routes/Contact';

function App() {
    const [simpleSidebar,
        setSimpleSidebar] = useState(true);
    const [language,
        setLanguage] = useState('en');

    const simpleSidebarClick = () => {
        setSimpleSidebar(cur => !cur);
    }
    // let contents = []; for(let i=0; i<500; i++) {     contents.push(<p>hello this
    // is contents</p>); }
    return (
        <div className="App">
            <BrowserRouter>
                <header className="App-header">
                    <Navigation
                        navigation={storage.contents.Navigation}
                        simpleSidebarClick={simpleSidebarClick}/>
                </header>
                <body>
                    <div className='App-body'>
                        <div
                            className='sidebar'
                            style={{
                            'width': `${simpleSidebar
                                ? '45px'
                                : '150px'}`
                        }}>
                            <Sidebar sidebar={storage.menu} simpleSidebar={simpleSidebar}/>
                        </div>
                        <div className='main'>

                            <Routes>
                                <Route
                                    path='/'
                                    exact={true}
                                    element={< Home home = {
                                    storage.contents.english
                                } />}/>
                                <Route
                                    path='/about'
                                    element={< About about = {
                                    storage.contents.english.About
                                } />}/>
                                <Route
                                    path='/career'
                                    element={< Career career = {
                                    storage.contents.english.Career
                                } />}/>
                                <Route
                                    path='/portfolio'
                                    element={< Portfolio portfolio = {
                                    storage.contents.english.Portfolio
                                } />}/>
                                <Route
                                    path='/contact'
                                    element={< Contact contact = {
                                    storage.contents.english.Contact
                                } />}/>
                            </Routes>
                        </div>
                    </div>
                </body>
            </BrowserRouter>

        </div>
    );
}

export default App;
