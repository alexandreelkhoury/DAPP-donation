import React from 'react';

const Card = () => {
    return (

        // Shows the pictures of the NFTs

        <div class="card-group" style={{ maxWidth: "68rem", margin: "20px 150px" }}>
            <div class="card text-bg-dark mb-3">
                <img src="./1.jpg" class="card-img-top" alt="Raise Lebanon Heart" />
                <div class="card-body">
                    <h5 class="card-title">First NFT</h5>
                    <p class="card-text">Donate more than 0.01 eth</p>
                </div>
            </div>
            <div class="card text-bg-dark mb-3">
                <img src="./2.jpg" class="card-img-top" alt="react logoo" />
                <div class="card-body">
                    <h5 class="card-title">Second NFT</h5>
                    <p class="card-text">Donate more than 0.05 eth</p>
                </div>
            </div>
            <div class="card text-bg-dark mb-3">
                <img src="./3.jpg" class="card-img-top" alt="react logo" />
                <div class="card-body">
                    <h5 class="card-title">Third NFT</h5>
                    <p class="card-text">Donate more than 0.1 eth</p>
                </div>
            </div>
        </div>
    );
};

export default Card;