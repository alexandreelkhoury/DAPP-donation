import React from 'react';

const Withdraw = (props) => {
    if (props.account === "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266") {
        const btn = document.createElement("button");
        btn.innerHTML = "Withdraw";
        btn.onClick = { Withdraw };
        document.body.appendChild(btn);
        console.log('hello');
    }
    return (
        <div>

        </div>
    );
};

export default Withdraw;