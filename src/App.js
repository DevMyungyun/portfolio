import React, {useState} from 'react';
import {HashRouter, Router, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

import storage from "./storage.json";
import Home from './components/Home';

function App() {
    const [simpleSidebar, setSimpleSidebar] = useState(false);
    const [language, setLanguage] = useState('en');

    const simpleSidebarClick = () => {
        setSimpleSidebar(cur => !cur);
    }
    // let contents = [];
    // for(let i=0; i<500; i++) {
    //     contents.push(<p>hello this is contents</p>);
    // }
    return (
        <div className="App">
            <header className="App-header">
                <HashRouter>
                    <Navigation navigation={storage.contents.Navigation}
                                simpleSidebarClick={simpleSidebarClick}
                    />
                </HashRouter>
            </header>
            <body>
                <div className='App-body'>
                    <div className='sidebar' style={{'width': `${simpleSidebar ? '60px' : '150px'}`}}>
                        <Sidebar sidebar={storage.menu} 
                                simpleSidebar={simpleSidebar}
                        />
                    </div>
                    <div className='main'>
                        <Home home={storage.contents.english.Home} />
                        {/* <b>this is Body</b>
                           {
                            contents
                           }
     */}
                    </div>
                </div>
            </body>
        </div>
    );
}

export default App;
