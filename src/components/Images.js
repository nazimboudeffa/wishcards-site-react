import React from 'react';
import adha from '../assets/images/islam/eid-adha1.png';
import purnima from '../assets/images/buddhism/buddh-purnima.jpg';
import dudeism from '../assets/images/dudeism/dudeism-new-cover-image.jpg';
import newyear from '../assets/images/islam/new-year.jpg';
import achoura from '../assets/images/islam/achoura.jpg';

class Images extends React.Component {
    render() {
        return (
            <div className="p-5">
                <h1>Choose a Card</h1>
                <a href="adha.html"><img src={adha} alt="adha"/></a>
                <a href="purnima.html"><img src={purnima} alt=""/></a>
                <a href="dude.html"><img src={dudeism} alt=""/></a>
                <a href="newyear.html"><img src={newyear} alt="new year"/></a>
                <a href="achoura.html"><img src={achoura} alt="achoura"/></a>
                <p>My best wishs</p>
                <p>Nazim</p>
                <a class="github-fork-ribbon" href="https://github.com/nazimboudeffa/wishcards-site-react" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
            </div>
        )
    }
}

export default Images;