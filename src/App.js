import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Faq from './pages/Faq';
import { React, useState, useEffect } from 'react';
import { ethers, utils } from 'ethers';
import IStandWithLebanon from './artifacts/contracts/IStandWithLebanon.sol/IStandWithLebanon.json';

const contractAddress = '0x0CeeA55746668D3f0A14cAefe2d2dE0302244f93';

const App = () => {

  const [contract, setContract] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {

    async function fetch() {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccounts(accounts);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, IStandWithLebanon.abi, signer);
        setContract(contract);
        if (accounts.length > 0) {
          document.getElementById('connect-address').textContent = 'Connected to : ' + accounts[0];
        }
      }
    }
    fetch();
  }, [])

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccounts(accounts);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, IStandWithLebanon.abi, signer);
      setContract(contract);
      if (accounts.length > 0) {
        document.getElementById('connect-address').textContent = 'Connected to : ' + accounts[0];
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
        const transaction = await contract.withdraw();
        await transaction.wait;
      }
      catch (err) {
        setError(err.message)
      }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home accounts={accounts} connectWallet={connectWallet} mint={mint} withdraw={withdraw} />} />
          <Route path="/FAQ" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
