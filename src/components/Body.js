import React from 'react';

const Body = (props) => {
    return (
        <div className="container">
            <h1>I Stand With Lebanon</h1>
            <br />
            <div className="row">
                <h4 id="connect-address">Please connect your wallet</h4>
                <br />
                <div>
                    <label>Donate and get in return up to 3 NFTs !</label>
                    <br />
                    <br />
                    <label>Please enter the amount of eth you want to donate </label>
                    <br />
                    <h3>100% of proceeds go to supporting Lebanon !</h3>
                    <br />
                    <div class="input-group mb-3">
                        <input type="number" id="value" step="0.01" class="form-control" placeholder="0.01" aria-label="amount" style={{ width: "100px" }} aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button onClick={props.mint} class="btn btn-outline-light me-2" >Donate/Mint</button>
                        </div>
                    </div>
                </div>
                <br />
                <label>Thanks for donating !</label>
            </div>
        </div>
    );
};

export default Body;