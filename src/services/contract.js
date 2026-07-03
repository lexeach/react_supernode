import Web3 from "web3";
import BigNumber from "bignumber.js";

import ContractABI from "../abi/ContractABI";
import StableCoinABI from "../abi/StableCoinABI";

/* ============================================================
   CONTRACT CONFIGURATION
============================================================ */

export const CONTRACT_ADDRESS =
    "0xd842954Dff871328C932Cd9CA3c260Cc22CC4655";

export const STABLE_COIN_ADDRESS =
    "0x0EB11261F9F778fEfd688e2dfAdB77862E96605b";

/* ============================================================
   WEB3
============================================================ */

let web3 = null;

let contract = null;

let stableCoin = null;

let connectedAccount = null;

let userInfo = null;

/* ============================================================
   INITIALIZE WEB3
============================================================ */

export const initializeWeb3 = async () => {

    if (!window.ethereum) {

        throw new Error("MetaMask is not installed.");

    }

    web3 = new Web3(window.ethereum);

    contract = new web3.eth.Contract(
        ContractABI,
        CONTRACT_ADDRESS
    );

    stableCoin = new web3.eth.Contract(
        StableCoinABI,
        STABLE_COIN_ADDRESS
    );

    return true;

};

/* ============================================================
   CONNECT WALLET
============================================================ */

export const connectWallet = async () => {

    await initializeWeb3();

    const accounts =
        await window.ethereum.request({

            method: "eth_requestAccounts",

        });

    connectedAccount = accounts[0];

    userInfo =
        await contract.methods
            .users(connectedAccount)
            .call({
                from: connectedAccount,
            });

    return {

        account: connectedAccount,

        user: userInfo,

    };

};

/* ============================================================
   GETTERS
============================================================ */

export const getWeb3 = () => web3;

export const getContract = () => contract;

export const getStableCoin = () => stableCoin;

export const getAccount = () => connectedAccount;

export const getUser = () => userInfo;

/* ============================================================
   WEI <-> ETH
============================================================ */

export const weiToEth = (value) => {

    const weiBN = new BigNumber(value);

    return weiBN
        .dividedBy(
            new BigNumber("1000000000000000000")
        )
        .toFixed(2);

};

export const weiToEth4 = (value) => {

    return parseFloat(

        web3.utils.fromWei(
            value.toString(),
            "ether"
        )

    ).toFixed(4);

};

export const ethToWei = (value) => {

    return web3.utils.toWei(

        value.toString(),

        "ether"

    );

};

/* ============================================================
   DATE HELPERS
============================================================ */

export const pad = (number) => {

    return number < 10

        ? "0" + number

        : number;

};

export const timestampToDate = (timestamp) => {

    const date = new Date(

        Number(timestamp) * 1000

    );

    const months = [

        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",

    ];

    return `${pad(date.getDate())}-${months[date.getMonth()]}-${date.getFullYear()}`;

};

/* ============================================================
   META MASK EVENTS
============================================================ */

export const listenWalletChanges = (

    callback

) => {

    if (!window.ethereum) return;

    window.ethereum.on(

        "accountsChanged",

        async (accounts) => {

            connectedAccount = accounts[0];

            if (connectedAccount) {

                userInfo =
                    await contract.methods
                        .users(connectedAccount)
                        .call({
                            from: connectedAccount,
                        });

            }

            if (callback) {

                callback(

                    connectedAccount,

                    userInfo

                );

            }

        }

    );

};

/* ============================================================
   END OF PART 1
============================================================ */

/* ============================================================
   DASHBOARD DATA
============================================================ */

export const getAvailableInfo = async () => {

    const withdrawableROI =
        await contract.methods
            .withdrawableROI(connectedAccount)
            .call({
                from: connectedAccount,
            });

    return {

        availableBalance:
            await weiToEth(userInfo.rootBalance),

        myNodes:
            Number(userInfo.ownNode),

        totalIncome:
            await weiToEth(userInfo.income),

        withdrawableROI:
            await weiToEth4(withdrawableROI),

    };

};

/* ============================================================
   USER INFO
============================================================ */

export const getUserInfo = async () => {

    const regTime =
        await contract.methods
            .regTime(connectedAccount)
            .call({
                from: connectedAccount,
            });

    const mintDays =
        await contract.methods
            .mintDays(connectedAccount)
            .call({
                from: connectedAccount,
            });

    return {

        userId:
            Number(userInfo.id),

        yourNodes:
            Number(userInfo.ownNode),

        referredForm:
            Number(userInfo.referrerID),

        atPrice:
            await weiToEth(userInfo.atPrice),

        referredUsers:
            Number(userInfo.referredUsers),

        totalIncome:
            await weiToEth(userInfo.income),

        rootBalance:
            await weiToEth(userInfo.rootBalance),

        assuredReward:
            await weiToEth(userInfo.assuredReward),

        teamSize:
            Number(userInfo.levelIncomeReceived),

        tokenRoi:
            await weiToEth(userInfo.takenROI),

        stakeTimes:
            timestampToDate(userInfo.stakeTimes),

        incomeMissed:
            Number(userInfo.incomeMissed),

        registerTime:
            timestampToDate(regTime),

        mintDays:
            mintDays + " Days",

    };

};

/* ============================================================
   SLIDER
============================================================ */

export const getSliderInfo = async () => {

    const currRound =
        await contract.methods
            .currRound()
            .call({
                from: connectedAccount,
            });

    const currRoundStart =
        await contract.methods
            .currRoundStartTime()
            .call({
                from: connectedAccount,
            });

    const currUserID =
        await contract.methods
            .currUserID()
            .call({
                from: connectedAccount,
            });

    const endTime =
        await contract.methods
            .endTime()
            .call({
                from: connectedAccount,
            });

    const nodePrice =
        await contract.methods
            .nodePrice()
            .call({
                from: connectedAccount,
            });

    const totalNodes =
        await contract.methods
            .totalNode()
            .call({
                from: connectedAccount,
            });

    const takenTop4Income =
        await contract.methods
            .takenTop4Income(connectedAccount)
            .call({
                from: connectedAccount,
            });

    return {

        currentRound:
            Number(currRound),

        currentRoundStart:
            timestampToDate(currRoundStart),

        currentUserId:
            Number(currUserID),

        endTime:
            timestampToDate(endTime),

        totalNodes:
            Number(totalNodes),

        nodePrice:
            await weiToEth(nodePrice),

        takenTop4Income:
            await weiToEth(takenTop4Income),

    };

};

/* ============================================================
   NETWORK INFO
============================================================ */

export const getNetworkInfo = async () => {

    const totalNodes =
        await contract.methods
            .totalNode()
            .call({
                from: connectedAccount,
            });

    const soldNodes =
        await contract.methods
            .soldNode()
            .call({
                from: connectedAccount,
            });

    const nodePrice =
        await contract.methods
            .nodePrice()
            .call({
                from: connectedAccount,
            });

    const endTime =
        await contract.methods
            .endTime()
            .call({
                from: connectedAccount,
            });

    return {

        totalNodes:
            Number(totalNodes),

        soldNodes:
            Number(soldNodes),

        nodePrice:
            await weiToEth(nodePrice),

        endTime:
            timestampToDate(endTime),

    };

};

/* ============================================================
   TODAY WINNER
============================================================ */

export const getTodayWinner = async () => {

    const currRound =
        await contract.methods
            .currRound()
            .call({
                from: connectedAccount,
            });

    const report =
        await contract.methods
            .reports(currRound)
            .call({
                from: connectedAccount,
            });

    return {

        topOneAddress:
            report.first,

        topOneValue:
            await weiToEth(report.firstTO),

        topTwoAddress:
            report.second,

        topTwoValue:
            await weiToEth(report.secondTO),

        topThreeAddress:
            report.third,

        topThreeValue:
            await weiToEth(report.thirdTO),

        topFourAddress:
            report.fourth,

        topFourValue:
            await weiToEth(report.fourthTO),

        top4PoolForwarded:
            await weiToEth(report.top4PoolForwarded),

        actualTO:
            await weiToEth(
                (
                    Number(report.actualTO) / 10
                ).toString()
            ),

        top4Pool:
            await weiToEth(report.top4Pool),

        top4Pool2Distribute:
            await weiToEth(report.top4Pool2Distribute),

    };

};

/* ============================================================
   LOAD DASHBOARD
============================================================ */

export const loadDashboard = async () => {

    return {

        statistics:
            await getAvailableInfo(),

        userInfo:
            await getUserInfo(),

        slider:
            await getSliderInfo(),

        network:
            await getNetworkInfo(),

        winners:
            await getTodayWinner(),

    };

};

/* ============================================================
   END PART 2
============================================================ */


/* ============================================================
   LEVEL INFORMATION
============================================================ */

export const getLevelInfo = async () => {

    const levels =
        await contract.methods
            .levels(connectedAccount)
            .call({
                from: connectedAccount,
            });

    const levelsIncome =
        await contract.methods
            .levelsIncome(connectedAccount)
            .call({
                from: connectedAccount,
            });

    const directIncome =
        await contract.methods
            .directIncome(connectedAccount)
            .call({
                from: connectedAccount,
            });

    return {

        level1Round: Number(userInfo.referredUsers),
        level1Income: await weiToEth(directIncome),

        level2Round: Number(levels.two),
        level2Income: await weiToEth(levelsIncome.two),

        level3Round: Number(levels.three),
        level3Income: await weiToEth(levelsIncome.three),

        level4Round: Number(levels.four),
        level4Income: await weiToEth(levelsIncome.four),

        level5Round: Number(levels.five),
        level5Income: await weiToEth(levelsIncome.five),

        level6Round: Number(levels.six),
        level6Income: await weiToEth(levelsIncome.six),

        level7Round: Number(levels.seven),
        level7Income: await weiToEth(levelsIncome.seven),

        level8Round: Number(levels.eight),
        level8Income: await weiToEth(levelsIncome.eight),

        level9Round: Number(levels.nine),
        level9Income: await weiToEth(levelsIncome.nine),

        level10Round: Number(levels.ten),
        level10Income: await weiToEth(levelsIncome.ten),

        level11Round: Number(levels.eleven),
        level11Income: await weiToEth(levelsIncome.eleven),

        level12Round: Number(levels.twelve),
        level12Income: await weiToEth(levelsIncome.twelve),

        level13Round: Number(levels.thirteen),
        level13Income: await weiToEth(levelsIncome.thirteen),

        level14Round: Number(levels.forteen),
        level14Income: await weiToEth(levelsIncome.forteen),

        level15Round: Number(levels.fifteen),
        level15Income: await weiToEth(levelsIncome.fifteen),

    };

};

/* ============================================================
   REWARD INFORMATION
============================================================ */

export const getRewardInfo = async () => {

    const adminReward =
        await contract.methods
            .withdrawableReward(connectedAccount)
            .call({
                from: connectedAccount,
            });

    const turnover =
        await contract.methods
            .userTurnOver(connectedAccount)
            .call({
                from: connectedAccount,
            });

    const rank =
        await contract.methods
            .ranks(connectedAccount)
            .call({
                from: connectedAccount,
            });

    return {

        teamSize:
            Number(userInfo.levelIncomeReceived),

        turnover:
            await weiToEth(turnover),

        rank:
            Number(adminReward),

        directReferred:
            Number(userInfo.referredUsers),

        starOneValue: rank.starOne,
        starOnePaid: rank.starOnePaid,

        starTwoValue: rank.starTwo,
        starTwoPaid: rank.starTwoPaid,

        starThreeValue: rank.starThree,
        starThreePaid: rank.starThreePaid,

        starFourValue: rank.starFour,
        starFourPaid: rank.starFourPaid,

        starFiveValue: rank.starFive,
        starFivePaid: rank.starFivePaid,

        starSixValue: rank.starSix,
        starSixPaid: rank.starSixPaid,

        starSevenValue: rank.starSeven,
        starSevenPaid: rank.starSevenPaid,

    };

};

/* ============================================================
   TOP4 POOL HISTORY
============================================================ */

export const getTop4PoolHistory = async (
    round = null
) => {

    const currentRound =
        round ??
        await contract.methods
            .currRound()
            .call({
                from: connectedAccount,
            });

    const report =
        await contract.methods
            .reports(currentRound)
            .call({
                from: connectedAccount,
            });

    return {

        top4PoolForwarded:
            await weiToEth(
                report.top4PoolForwarded
            ),

        actualTO:
            await weiToEth(
                (
                    Number(report.actualTO) / 10
                ).toString()
            ),

        top4Pool:
            await weiToEth(
                report.top4Pool
            ),

        top4Pool2Distribute:
            await weiToEth(
                report.top4Pool2Distribute
            ),

    };

};

/* ============================================================
   COMPLETE LEVEL & REWARD DATA
============================================================ */

export const loadLevelRewardData = async () => {

    return {

        levelInfo:
            await getLevelInfo(),

        rewardInfo:
            await getRewardInfo(),

        poolHistory:
            await getTop4PoolHistory(),

    };

};

/* ============================================================
   END PART 3
============================================================ */

/* ============================================================
   REGISTRATION
============================================================ */

export const payNow = async (
    referralId,
    nodeQuantity
) => {

    const nodePrice =
        await contract.methods
            .nodePrice()
            .call({
                from: connectedAccount,
            });

    const totalAmount =
        new web3.utils.BN(nodePrice)
            .mul(
                new web3.utils.BN(nodeQuantity)
            );

    await stableCoin.methods
        .approve(
            CONTRACT_ADDRESS,
            totalAmount
        )
        .send({
            from: connectedAccount,
        });

    const receipt =
        await contract.methods
            .Registration(
                referralId,
                nodeQuantity
            )
            .send({
                from: connectedAccount,
                value: 0,
            });

    return receipt;

};

/* ============================================================
   DEPOSIT KBC
============================================================ */

export const depositKBC = async (
    amount
) => {

    const value =
        ethToWei(amount);

    const receipt =
        await contract.methods
            .depositKBC()
            .send({

                from:
                    connectedAccount,

                value,

            });

    return receipt;

};

/* ============================================================
   WITHDRAW ROI
============================================================ */

export const withdrawROI = async () => {

    const receipt =
        await contract.methods
            .withdrawROI()
            .send({

                from:
                    connectedAccount,

            });

    return receipt;

};

/* ============================================================
   WITHDRAW REWARD
============================================================ */

export const withdrawReward = async (
    starNumber
) => {

    const receipt =
        await contract.methods
            .withdrawReward(
                starNumber
            )
            .send({

                from:
                    connectedAccount,

            });

    return receipt;

};

/* ============================================================
   ADMIN ROI
============================================================ */

export const withdrawAdminROI =
async () => {

    return await contract.methods
        .withdrawAdminROI()
        .send({

            from:
                connectedAccount,

        });

};

/* ============================================================
   CLOSE ROUND
============================================================ */

export const closeRound =
async () => {

    return await contract.methods
        .closeRound()
        .send({

            from:
                connectedAccount,

        });

};

/* ============================================================
   WITHDRAW STABLE COIN
============================================================ */

export const withdrawalStableCoin =
async (

    wallet,

    amount

) => {

    const weiAmount =
        ethToWei(amount);

    return await contract.methods
        .withdrawalStableCoin(

            wallet,

            weiAmount

        )
        .send({

            from:
                connectedAccount,

        });

};

/* ============================================================
   COPY REFERRAL LINK
============================================================ */

export const getReferralLink = (

    baseUrl

) => {

    return `${baseUrl}?id=${userInfo.id}`;

};

/* ============================================================
   SEARCH USER WITHDRAWAL
============================================================ */

export const searchWithdrawal =
async (

    round

) => {

    const data =
        await contract.methods
            .dailyUserTO(

                round,

                connectedAccount

            )
            .call({

                from:
                    connectedAccount,

            });

    return {

        turnover:
            await weiToEth(
                data.myTO
            ),

    };

};

/* ============================================================
   READ WRITE PANEL VALUES
============================================================ */

export const getWritePanelData =
async () => {

    const nodePrice =
        await contract.methods
            .nodePrice()
            .call({

                from:
                    connectedAccount,

            });

    const withdrawableROI =
        await contract.methods
            .withdrawableROI(
                connectedAccount
            )
            .call({

                from:
                    connectedAccount,

            });

    const adminROI =
        await contract.methods
            .withdrawableAdminROI()
            .call({

                from:
                    connectedAccount,

            });

    return {

        nodePrice:
            await weiToEth(
                nodePrice
            ),

        withdrawableBalance:
            await weiToEth(
                withdrawableROI
            ),

        withdrawableAdminROI:
            await weiToEth(
                adminROI
            ),

    };

};

/* ============================================================
   END PART 4
============================================================ */


/* ============================================================
   SEARCH TODAY WINNER
============================================================ */

export const searchTodayWinner = async (round) => {

    const report = await contract.methods
        .reports(round)
        .call({
            from: connectedAccount,
        });

    return {

        topOneAddress: report.first,
        topOneValue: await weiToEth(report.firstTO),

        topTwoAddress: report.second,
        topTwoValue: await weiToEth(report.secondTO),

        topThreeAddress: report.third,
        topThreeValue: await weiToEth(report.thirdTO),

        topFourAddress: report.fourth,
        topFourValue: await weiToEth(report.fourthTO),

    };

};

/* ============================================================
   SEARCH TOP4 DISTRIBUTION
============================================================ */

export const searchDistributionPool =
async (round) => {

    const report =
        await contract.methods
            .reports(round)
            .call({
                from: connectedAccount,
            });

    return {

        top4PoolForwarded:
            await weiToEth(
                report.top4PoolForwarded
            ),

        actualTO:
            await weiToEth(
                (
                    Number(report.actualTO) / 10
                ).toString()
            ),

        top4Pool:
            await weiToEth(
                report.top4Pool
            ),

        top4Pool2Distribute:
            await weiToEth(
                report.top4Pool2Distribute
            ),

    };

};

/* ============================================================
   CHECK OWNER
============================================================ */

export const isOwner = async () => {

    const owner =
        await contract.methods
            .ownerWallet()
            .call({
                from: connectedAccount,
            });

    return (

        owner.toLowerCase() ===

        connectedAccount.toLowerCase()

    );

};

/* ============================================================
   USER STATUS
============================================================ */

export const getUserStatus =
async () => {

    const owner =
        await isOwner();

    return {

        isRegistered:
            userInfo.isExist,

        isOwner:
            owner,

        showRegistration:
            !(userInfo.isExist || owner),

        showReferral:
            userInfo.isExist || owner,

        showAdmin:
            owner,

    };

};

/* ============================================================
   ADMIN
============================================================ */

export const setLiquidityPoolAddress =
async (wallet) => {

    return await contract.methods
        .setLiquidityPoolAddress(wallet)
        .send({

            from:
                connectedAccount,

        });

};

/* ============================================================
   BUYBACK POOL
============================================================ */

export const setBuyBackPoolAddress =
async (wallet) => {

    return await contract.methods
        .setbuyBackPoolAddress(wallet)
        .send({

            from:
                connectedAccount,

        });

};

/* ============================================================
   GLOBAL INSURANCE
============================================================ */

export const setGlobalInsuranceAddress =
async (wallet) => {

    return await contract.methods
        .setglobalInsuranceAddress(wallet)
        .send({

            from:
                connectedAccount,

        });

};

/* ============================================================
   OWNER WALLET
============================================================ */

export const getOwnerWallet =
async () => {

    return await contract.methods
        .ownerWallet()
        .call({

            from:
                connectedAccount,

        });

};

/* ============================================================
   CURRENT ROUND
============================================================ */

export const getCurrentRound =
async () => {

    return await contract.methods
        .currRound()
        .call({

            from:
                connectedAccount,

        });

};

/* ============================================================
   CURRENT USER ID
============================================================ */

export const getCurrentUserID =
async () => {

    return await contract.methods
        .currUserID()
        .call({

            from:
                connectedAccount,

        });

};

/* ============================================================
   NODE PRICE
============================================================ */

export const getNodePrice =
async () => {

    const value =
        await contract.methods
            .nodePrice()
            .call({

                from:
                    connectedAccount,

            });

    return await weiToEth(value);

};

/* ============================================================
   TOTAL NODE
============================================================ */

export const getTotalNode =
async () => {

    return await contract.methods
        .totalNode()
        .call({

            from:
                connectedAccount,

        });

};

/* ============================================================
   SOLD NODE
============================================================ */

export const getSoldNode =
async () => {

    return await contract.methods
        .soldNode()
        .call({

            from:
                connectedAccount,

        });

};

/* ============================================================
   END PART 5
============================================================ */


/* ============================================================
   COUNTDOWN HELPERS
============================================================ */

export const createCountdown = (targetTimestamp, callback) => {

    const update = () => {

        const now = Math.floor(Date.now() / 1000);

        let diff = Number(targetTimestamp) - now;

        if (diff < 0) diff = 0;

        const hours = Math.floor(diff / 3600);

        const minutes = Math.floor((diff % 3600) / 60);

        const seconds = diff % 60;

        callback({

            hours,

            minutes,

            seconds,

            text:

                `${String(hours).padStart(2, "0")}:` +

                `${String(minutes).padStart(2, "0")}:` +

                `${String(seconds).padStart(2, "0")}`,

        });

    };

    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);

};

/* ============================================================
   ROI COUNTDOWN
============================================================ */

export const getROITimestamp = () => {

    return Number(userInfo.stakeTimes);

};

/* ============================================================
   ROUND COUNTDOWN
============================================================ */

export const getRoundEndTimestamp =
async () => {

    return await contract.methods
        .endTime()
        .call({

            from:
                connectedAccount,

        });

};

/* ============================================================
   LOAD COMPLETE DASHBOARD
============================================================ */

export const loadDashboard =
async () => {

    const [

        statistics,

        slider,

        userInfo,

        network,

        winners,

        levelInfo,

        rewardInfo,

        poolHistory,

        writePanel,

        userStatus,

    ] = await Promise.all([

        getAvailableInfo(),

        getSliderInfo(),

        getUserInfo(),

        getNetworkInfo(),

        getTodayWinner(),

        getLevelInfo(),

        getRewardInfo(),

        getTop4PoolHistory(),

        getWritePanelData(),

        getUserStatus(),

    ]);

    return {

        statistics,

        slider,

        userInfo,

        network,

        winners,

        levelInfo,

        rewardInfo,

        poolHistory,

        writePanel,

        userStatus,

    };

};

/* ============================================================
   REFRESH USER INFO
============================================================ */

export const refreshUser =
async () => {

    userInfo =
        await contract.methods
            .users(connectedAccount)
            .call({

                from:
                    connectedAccount,

            });

    return userInfo;

};

/* ============================================================
   DISCONNECT
============================================================ */

export const disconnectWallet =
() => {

    connectedAccount = null;

    userInfo = null;

};

/* ============================================================
   DEFAULT EXPORT
============================================================ */

export default {

    initializeWeb3,

    connectWallet,

    disconnectWallet,

    refreshUser,

    loadDashboard,

    createCountdown,

    getROITimestamp,

    getRoundEndTimestamp,

    payNow,

    depositKBC,

    withdrawROI,

    withdrawReward,

    withdrawAdminROI,

    withdrawalStableCoin,

    closeRound,

    searchWithdrawal,

    searchTodayWinner,

    searchDistributionPool,

    getReferralLink,

    setLiquidityPoolAddress,

    setBuyBackPoolAddress,

    setGlobalInsuranceAddress,

    getCurrentRound,

    getCurrentUserID,

    getNodePrice,

    getTotalNode,

    getSoldNode,

    getUserStatus,

    getWeb3,

    getContract,

    getStableCoin,

    getAccount,

    getUser,

};

/* ============================================================
   END OF FILE
============================================================ */


