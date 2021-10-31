import React from 'react'; 
import './Images.css';

import adha from '../assets/images/islam/eid-adha1.png';
import purnima from '../assets/images/buddhism/buddh-purnima.jpg';
import dudeism from '../assets/images/dudeism/dudeism-new-cover-image.jpg';
import newyear from '../assets/images/islam/new-year.jpg';
import achoura from '../assets/images/islam/achoura.jpg';
import mawlid from '../assets/images/islam/mawlid.jpg';
import halloween from '../assets/images/christianism/halloween.jpg';

class Images extends React.Component {
    render() {
        return (
            <div>
                <h1>Choose a Card</h1>
                <div className="wrapper">
                    <div className="image"><a href="adha.html"><img src={adha} alt="adha"/></a></div>
                    <div className="image"><a href="purnima.html"><img src={purnima} alt=""/></a></div>
                    <div className="image"><a href="dude.html"><img src={dudeism} alt=""/></a></div>
                    <div className="image"><a href="newyear.html"><img src={newyear} alt="new year"/></a></div>
                    <div className="image"><a href="achoura.html"><img src={achoura} alt="achoura"/></a></div>
                    <div className="image"><a href="mawlid.html"><img src={mawlid} alt="mawlid"/></a></div>
                    <div className="image"><a href="halloween.html"><img src={halloween} alt="halloween"/></a></div>
                </div>
                <p>You can fork this project on <a href="https://github.com/nazimboudeffa/wishcards-site-react">GitHub</a></p>
                <p>My best wishs</p>
                <p>Nazim</p>
            </div>
        )
    }
}

export default Images;