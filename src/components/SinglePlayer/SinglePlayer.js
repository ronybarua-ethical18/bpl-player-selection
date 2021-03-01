import React from 'react';
import './SinglePlayer.css'
const SinglePlayer = (props) => {
    const singlePlayer = props.sPlayer;
    const { name, auction, image } = singlePlayer;
    return (
        <div>
            <div className="player-info">
                <div className="single-player-info text-center p-2">
                    <img src={image} className="img-thumbnail mb-2" alt="" />
                    <h6>{name}</h6>
                    <b>${auction}</b>
                </div>
            </div>
        </div>
    );
};

export default SinglePlayer;