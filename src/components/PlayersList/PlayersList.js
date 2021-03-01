import React, { useEffect, useState } from 'react';
import playersData from '../../fakeData/fakeData.json';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
const PlayersList = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playersData);
    }, [])

    const [playerCart, setPlayerCart] = useState([]);
    const handlePlayer = (players) => {
        if (playerCart.indexOf(players) === -1) {
            const newCart = [...playerCart, players];
            setPlayerCart(newCart);
        }
        else{
            alert('Player Already Added');
        }
    }
    return (
        <div className="players-info">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-7">
                        <div className="player-list-container">
                            {
                                players.map(play => <Player handlePlayer={handlePlayer} players={play} key={play.id}></Player>)
                            }
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="player-cart-container">
                            <Cart cart={playerCart}></Cart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayersList;