import React, { useState } from "react";
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

    const connectWallet = async () => {
        if (window.ethereum) {
            setLoading(true);
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.error("Connection failed:", error);
            } finally {
                setLoading(false);
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    return (
        <div className="dashboard bg-dashboard"> 
            <Navbar 
                walletAddress={walletAddress} 
                connectWallet={connectWallet} 
                loading={loading} 
            />
            <Statistics />
            <Slider />
            
            <div className="row px-5">
                <UserInfo />
                <NetworkInfo />
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
