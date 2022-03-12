import React from 'react';
import { Header } from './header';
import {Footer} from './footer';
import {Main}from './main';
import './styles/global.css'


const App =()=>{
    return <div>
            
            <Header/>
            <h1>Piloto de Fuga</h1>
            <Main></Main>
            <Footer/>
        </div>;
};

export default App;