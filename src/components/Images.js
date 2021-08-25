import React from 'react'; 
import './Images.css';

import adha from '../assets/images/islam/eid-adha1.png';
import purnima from '../assets/images/buddhism/buddh-purnima.jpg';
import dudeism from '../assets/images/dudeism/dudeism-new-cover-image.jpg';
import newyear from '../assets/images/islam/new-year.jpg';
import achoura from '../assets/images/islam/achoura.jpg';

class Images extends React.Component {
    render() {
        return (
            <div>
                <h1>Choose a Card</h1>
                <div className="wrapper">
                    <div><a href="adha.html"><img src={adha} alt="adha"/></a></div>
                    <div><a href="purnima.html"><img src={purnima} alt=""/></a></div>
                    <div><a href="dude.html"><img src={dudeism} alt=""/></a></div>
                    <div><a href="newyear.html"><img src={newyear} alt="new year"/></a></div>
                    <div><a href="achoura.html"><img src={achoura} alt="achoura"/></a></div>
                </div>
                <p>My best wishs</p>
                <p>Nazim</p>
                <a class="github-fork-ribbon" href="https://github.com/nazimboudeffa/wishcards-site-react" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
            </div>
        )
    }
}

export default Images;