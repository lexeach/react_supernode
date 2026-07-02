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

    return (

        <>

            <Navbar />

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

        </>

    );

}

export default App;