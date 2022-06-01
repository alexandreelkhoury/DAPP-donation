import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Faq from './pages/Faq';
import { React, useState } from 'react';
import { ethers, utils } from 'ethers';
import IStandWithLebanon from './artifacts/contracts/IStandWithLebanon.sol/IStandWithLebanon.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const App = () => {

  const [contract, setContract] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState('');

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      await setAccounts(accounts);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, IStandWithLebanon.abi, signer);
      // const contract2 = new ethers.Contract(contractAddress, IStandWithLebanon.abi, provider);
      setContract(contract);
      if (accounts[0].length > 0) {
        var connect = document.getElementById('connect-address');
        const userAddress = document.createElement('h5');
        userAddress.innerHTML = '<h5 id="account"> Connected : ' + accounts[0] + '</h5>';
        connect.parentNode.replaceChild(userAddress, connect);
      }
    }
  }

  async function mint() {
    if (typeof window.ethereum !== 'undefined') {
      // await connectWallet();
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
        let overrides = {
          from: accounts[0]
        }
        const transaction = await contract.withdraw(overrides);
        await transaction.wait;
      }
      catch (err) {
        setError(err.message)
      }
    }
  }

  return (
    <body>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home accounts={accounts} connectWallet={connectWallet} mint={mint} withdraw={withdraw} />} />
            <Route path="/FAQ" element={<Faq />} />
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}

export default App;
