import React, { useEffect } from 'react';
import Navigation from './Navigation'

const Navbar = (props) => {

    // navbar thats adapts to whoever is connected (owner or user)

    useEffect(() => {
        async function addWithdrawButton() {
            if (props.account[0] === "0x3fa9dd7e1907a1d97ffd0bb59b4bed0d85b44aec") {
                var button = document.getElementById('connectButton');
                const withdrawButton = document.createElement('Button');
                withdrawButton.innerHTML = 'Withdraw';
                const custom_style = {
                    position: "absolute",
                    top: "13px",
                    right: "50px"
                }
                Object.assign(withdrawButton.style, custom_style);
                withdrawButton.className = "btn btn-outline-light me-2";
                withdrawButton.id = "withButton";
                button.parentNode.replaceChild(withdrawButton, button);
                document.getElementById("withButton").addEventListener("click", props.withdraw);
            } else if (props.account[0] > 0) {
                document.getElementById('connectButton').remove();
            }
        }

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