import { React } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from '../components/Body';
import Card from '../components/Card';

const Home = ({ accounts, connectWallet, mint, withdraw }) => {
    return (
        <div>
            <Navbar connectWallet={connectWallet} account={accounts} withdraw={withdraw} />
            <Body mint={mint} />
            <Card />
        </div>
    )
}
export default Home;
