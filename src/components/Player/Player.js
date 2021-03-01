import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const Player = (props) => {
    const { name, team, role, auction, image, batting, bowling } = props.players;
    return (
        <div className="single-player d-inline-block col-md-6">
            <div className="shadow p-3 border mb-3">
                <div className="player-image">
                    <div className="single-image d-flex justify-content-center">
                        <img src={image} className="img-fluid mb-3" alt="" />
                    </div>
                    <div className="social-links">
                        <a href="/"><FontAwesomeIcon className="icons" icon={faFacebook} /></a>
                        <a href="/"><FontAwesomeIcon className="icons" icon={faTwitter} /></a>
                        <a href="/"><FontAwesomeIcon className="icons" icon={faInstagram} /></a>
                        <a href="/"><FontAwesomeIcon className="icons" icon={faLinkedin} /></a>
                    </div>
                </div>
                <div className="player-info">
                    <p><b>Name:</b> {name}</p>
                    <p><b>Team:</b> {team}</p>
                    <p><b>Role:</b> {role}</p>
                    <p><b>Auction:</b> ${auction} </p>
                    <p><b>Batting</b>: {batting}</p>
                    <p><b>Bowling</b>: {bowling}</p>
                </div>
                <div className="add-player">
                    <button onClick={() => props.handlePlayer(props.players)}
                        className="btn mb-3">
                        <FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;