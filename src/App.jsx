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
    const [userData, setUserData] = useState({}); // Stores contract data

    // 1. Function to fetch data from the contract
    const fetchContractData = async (address) => {
        if (!window.ethereum) return;
        
        const web3 = new Web3(window.ethereum);
        // const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        
        try {
            // Example: const data = await contract.methods.getUserInfo(address).call();
            // Update this based on your actual contract methods
            const mockData = { totalMintable: "150.5 KBC", myNodes: "5" }; 
            setUserData(mockData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // 2. Logic to connect wallet
    const connectWallet = async () => {
        if (window.ethereum) {
            setLoading(true);
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);
                fetchContractData(accounts[0]); // Fetch data immediately after connection
            } catch (error) {
                console.error("Connection failed:", error);
            } finally {
                setLoading(false);
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    // 3. Keep data synced if the user switches accounts in MetaMask
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
            
            {/* Pass the fetched data to your components */}
            <Statistics data={userData} />
            <Slider />
            
            <div className="row px-5">
                <UserInfo data={userData} />
                <NetworkInfo data={userData} />
            </div>            
            {/* Pass the fetched data to your components */}
            <Statistics data={userData} />
            <Slider />
            
            <div className="row px-5">
                <UserInfo data={userData} />
                <NetworkInfo data={userData} />
            </div> 
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
