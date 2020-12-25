import * as React from 'react';
import logo from 'views/home/logo.svg';
import 'views/home/home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Arquetipo frontend - React JS</p>
            <p><strong>MINEDU-USI</strong></p>
            <Link to="/login">Ingresar</Link>
        </header>
    </div>
}

export default Home;