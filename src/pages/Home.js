import { React, useState, useEffect } from 'react';
import { ethers, utils } from 'ethers';
import IStandWithLebanon from '../artifacts/contracts/IStandWithLebanon.sol/IStandWithLebanon.json';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from '../components/Body';
import Card from '../components/Card';
import Withdraw from '../components/Withdraw';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const Home = () => {

    const [contract, setContract] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [error, setError] = useState('');
    //const [owner, setOwner] = useState(false);
    // const [contract2, setContract2] = useState('');

    useEffect(() => {
        //     async function Withdraw() {
        //         if (typeof window.ethereum !== 'undefined') {
        //             try {
        //                 const transaction = await contract.withdraw();
        //                 await transaction.wait;
        //             }
        //             catch (err) {
        //                 setError(err.message)
        //             }
        //         }
        //     }

        async function connectWallet() {
            if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                await setAccounts(accounts);
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(contractAddress, IStandWithLebanon.abi, signer);
                // const contract2 = new ethers.Contract(contractAddress, IStandWithLebanon.abi, provider);
                setContract(contract);
                if (accounts.length > 0) {
                    var button = document.getElementById('connectButton');
                    const userAddress = document.createElement('h5');
                    userAddress.innerHTML = '<h5 id="account">' + accounts[0] + '</h5>';
                    button.parentNode.replaceChild(userAddress, button);
                }
                // setContract2(contract2);
                // if (accounts[0] === "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266") {
                //     const btn = document.createElement("button");
                //     btn.innerHTML = "Withdraw";
                //     btn.onClick = { Withdraw };
                //     document.body.appendChild(btn);
                // }
            }
        }

        connectWallet()

        //     async function isConnected() {
        //         if (accounts.length > 0) {
        //             var button = document.getElementById('connectButton');
        //             const userAddress = document.createElement('h3');
        //             userAddress.innerHTML = '<h4 id="account">' + accounts[0] + '</h4>';
        //             button.parentNode.replaceChild(userAddress, button);
        //         }
        //     }

        //     async function isOwner() {

        //         const ownerr = await contract.ownerr();
        //         await ownerr.wait;
        //         //owner = ownerAddress === accounts[0];
        //         //if (ownerAddress === accounts[0]) {
        //         //    console.log('you are the owner');
        //         //}
        //         //const ownerr = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
        //         if (accounts[0] !== ownerr) {
        //             var elem = document.getElementById('withdrawButton');
        //             elem.remove();
        //         }
        //         //(owner) ? console.log('you are the owner') : elem.parentNode.removeChild(elem);
        //         //return false;
        //     }


        //     isConnected()
        //     isOwner()
    }, []);


    async function connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccounts(accounts);
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, IStandWithLebanon.abi, signer);
            // const contract2 = new ethers.Contract(contractAddress, IStandWithLebanon.abi, provider);
            setContract(contract);
            // setContract2(contract2);
            if (accounts[0] === "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266") {
                const btn = document.createElement("button");
                btn.innerHTML = "Withdraw";
                btn.onClick = { Withdraw };
                document.body.appendChild(btn);
            }
        }
    }




    async function mint() {
        if (typeof window.ethereum !== 'undefined') {
            await connectWallet();
            const price = document.getElementById('value').value;
            try {
                let overrides = {
                    from: accounts[0],
                    value: utils.parseEther(price.toString())
                }
                const transaction = await contract.mint(overrides);
                await transaction.wait;
            }
            catch (err) {
                setError(err.message);
                console.log(error);
            }
        }
    }



    async function withdraw() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                const transaction = await contract.withdraw();
                await transaction.wait;
            }
            catch (err) {
                setError(err.message)
            }
        }
    }

    return (
        <div>
            <Navbar account={accounts[0]} />
            <Body />
            <Card />
            <Withdraw account={accounts[0]} />
        </div>
    )
}



export default Home;
