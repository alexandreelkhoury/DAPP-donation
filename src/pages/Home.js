import { React, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from '../components/Body';
import Card from '../components/Card';
import Withdraw from '../components/Withdraw';


const Home = ({ accounts, connectWallet, mint }) => {
    return (
        <div>
            <Navbar connectWallet={connectWallet} account={accounts} />
            <Body mint={mint} />
            <Card />
            <Withdraw account={accounts[0]} />
        </div>
    )
}
export default Home;
