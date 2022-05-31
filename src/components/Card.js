import React from 'react';

const Card = () => {
    return (
        <div class="card-group" style={{ maxWidth: "68rem", margin: "20px 150px" }}>
            <div class="card text-bg-dark mb-3">
                <img src="./logo192.png" class="card-img-top" alt="ISWL" />
                <div class="card-body">
                    <h5 class="card-title">First NFT</h5>
                    <p class="card-text">Donate more than 0.01 eth.</p>
                </div>
            </div>
            <div class="card text-bg-dark mb-3">
                <img src="./logo192.png" class="card-img-top" alt="react logoo" />
                <div class="card-body">
                    <h5 class="card-title">Second NFT</h5>
                    <p class="card-text">Donate more than 0.05 eth.</p>
                </div>
            </div>
            <div class="card text-bg-dark mb-3">
                <img src="./logo512.png" class="card-img-top" alt="react logo" />
                <div class="card-body">
                    <h5 class="card-title">Third NFT</h5>
                    <p class="card-text">Donate more than 0.1 eth.</p>
                </div>
            </div>
        </div>
    );
};

export default Card;