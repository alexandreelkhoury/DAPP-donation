import React from 'react';

const Body = () => {
    return (
        <div className="container">
            <h1>I Stand With Lebanon</h1>
            <div className="row">
                <h4>Please connect your wallet</h4>
                <div>
                    <label>Donate and get in return up to 3 NFTs !</label>
                    <br />
                    <label>Please select the amount of eth you want to donate </label>
                    <br />
                    <input
                        id='value'
                        type="number"
                        placeholder="0.01"
                        min="0.01"
                    />
                    <button>mint</button>
                </div>
                <br />
                <label>Thanks for donating !</label>
            </div>
        </div>
    );
};

export default Body;