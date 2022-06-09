import React from 'react';
import '../styles/body.css';

const Body = (props) => {
    return (
        <div class="jumbotron" >
            <h1 class="display-4">I Stand With Lebanon</h1>
            <p class="lead" id="connect-address">Please connect your wallet.</p>
            <hr class="my-4" />
            <h6 class="display-6">Almost two years after the devastating explosion in Beirut’s port district, Lebanon is in economic crisis and most people live below the poverty line.</h6>
            <br />
            <h6 class="display-6">Donate and get up to 3 NFTs in return !</h6>
            <br />
            {/* <div class="input-group mb-3">
                <input type="number" id="value" step="0.01" class="form-control" placeholder="0.01" aria-label="amount" aria-describedby="basic-addon2" />
                <div class="input-group-append w-auto">
                    <button onClick={props.mint} class="btn btn-outline-light me-2" style={{ position: "center" }}>Donate/Mint</button>
                </div>
                <h6 class="display-7">Donate and get up to 3 NFTs in return !</h6>
            </div> */}
            <card class="row g-3" >
                <div class="col-auto mx-auto d-flex flex-row">
                    <input type="number" class="form-control" id="value" step="0.01" placeholder="0.01" aria-label="amount" aria-describedby="basic-addon2" />
                    <button onClick={props.mint} class="btn btn-outline-dark me-2">Donate/Mint</button>
                </div>
            </card>
        </div >
    );
};

export default Body;
