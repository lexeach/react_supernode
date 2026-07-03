import React, { useState, useEffect } from "react"; // 1. Added useEffect here
import Web3 from "web3"; // 2. Added Web3 import
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";
import Slider from "./components/Slider";
import UserInfo from "./components/UserInfo";
import NetworkInfo from "./components/NetworkInfo";
import LevelInfo from "./components/LevelInfo";
import PoolHistory from "./components/PoolHistory";
import RewardInfo from "./components/RewardInfo";
import Registration from "./components/Registration";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Footer from "./components/Footer";

function App() {
    const [walletAddress, setWalletAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({});

    const fetchContractData = async (address) => {
        if (!window.ethereum) return;
        
        const web3 = new Web3(window.ethereum);
        
        try {
            // Placeholder: Replace with your actual contract call
            const mockData = { totalMintable: "150.5 KBC", myNodes: "5" }; 
            setUserData(mockData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const connectWallet = async () => {
        if (window.ethereum) {
            setLoading(true);
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);
                fetchContractData(accounts[0]);
            } catch (error) {
                console.error("Connection failed:", error);
            } finally {
                setLoading(false);
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                setWalletAddress(accounts[0] || "");
                if (accounts[0]) fetchContractData(accounts[0]);
            });
        }
    }, []);

    return (
        <div className="dashboard bg-dashboard"> 
            <Navbar 
                walletAddress={walletAddress} 
                connectWallet={connectWallet} 
                loading={loading} 
            />
            
            <Statistics data={userData} />
            <Slider />
            
            <div className="row px-5">
                <UserInfo data={userData} />
                <NetworkInfo data={userData} />
            </div>

            <div className="row px-5">
                <LevelInfo />
                <PoolHistory />
            </div>

            <div className="row px-5">
                <RewardInfo />
                <Registration />
            </div>

            <div className="row px-5">
                <Deposit />
                <Withdraw />
            </div>

            <Footer />
        </div>
    );
}

export default App;
