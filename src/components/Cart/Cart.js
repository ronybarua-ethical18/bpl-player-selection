import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Cart.css';
const Cart = (props) => {
    const playerCart = props.cart;
    console.log(playerCart);
    const budget = playerCart.reduce((budget, totalBudget) => budget + totalBudget.auction, 0)
    return (
        <div class="col cart-details">
            <div className="shadow p-3 border text-center">
                <h1 className="">Player Details</h1>
                <h4>Players Added: {playerCart.length}</h4>
                <h4 class="mb-3">Total Estimated Budget: ${budget}</h4>
                <hr></hr>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        playerCart.map(psingle => <SinglePlayer sPlayer={psingle} key={psingle.id}></SinglePlayer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;