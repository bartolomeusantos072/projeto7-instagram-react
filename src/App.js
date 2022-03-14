import React from 'react';
import {Header } from './header';
import {Footer} from './footer';
import {Main}from './main';
import './styles/global.css'


const App =()=>{
    return <div>
            
            <Header/>
            <Main></Main>
            <Footer/>
        </div>;
};

export default App;