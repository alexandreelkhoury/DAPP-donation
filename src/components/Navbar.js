import React, { useEffect } from 'react';
import Navigation from './Navigation'

const Navbar = (props) => {

    useEffect(() => {

        async function showWalletAddress() {
            if (props.account.length > 0) {
                var connect = document.getElementById('connect-address');
                const userAddress = document.createElement('h5');
                userAddress.innerHTML = '<h5 id="account"> Connected : ' + props.account[0] + '</h5>';
                connect.parentNode.replaceChild(userAddress, connect);
            }
        }

        async function addWithdrawButton() {
            if (props.account[0] === '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266') {
                var button = document.getElementById('connectButton');
                const withdrawButton = document.createElement('Button');
                withdrawButton.innerHTML = 'Withdraw';
                const custom_style = {
                    position: "absolute",
                    top: "13px",
                    right: "50px"
                }
                Object.assign(withdrawButton.style, custom_style);

                withdrawButton.onclick = props.withdraw;
                withdrawButton.className = "btn btn-outline-light me-2"
                button.parentNode.replaceChild(withdrawButton, button);
            } else if (props.account[0] > 0) {
                document.getElementById('connectButton').remove();
            }
        }

        showWalletAddress()
        addWithdrawButton()
    }, [props])

    return (
        <div>
            <header class="p-3 bg-dark text-white">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img src="./logo.png" class="bi me-2" width="45" height="25" aria-label="Bootstrap"></img>
                        </a>

                        {/* <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
                            <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
                            <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
                            <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
                            <li><a href="#" class="nav-link px-2 text-white">About</a></li>
                        </ul> */}

                        <Navigation />

                        <div class="text-end">
                            <button
                                type="button"
                                onClick={props.connectWallet}
                                id="connectButton"
                                class="btn btn-outline-light me-2"
                                style={{ position: "absolute", top: "13px", right: "50px" }}>
                                Connect Wallet
                            </button>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Navbar;