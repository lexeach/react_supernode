import React from "react";

const UserInfo = ({ data = {} }) => {

    const {

        userId = 0,
        yourNodes = 0,
        referredForm = 0,
        atPrice = "0.00",
        referredUsers = 0,
        totalIncome = "0.00",
        rootBalance = "0.00",
        assuredReward = "0.00",
        teamSize = 0,
        tokenRoi = "0.00",
        stakeTimes = "00-00-0000",
        incomeMissed = "0",
        registerTime = "0 Days",
        mintDays = "0 Days",

    } = data;

    return (

        <div className="col-lg-6">

            <div className="d-flex justify-content-center mt-4">

                <div className="network-heading text-center rounded-top-2">

                    KBC User Info

                </div>

            </div>

            <div className="user-box">

                <div className="user-item">

                    <div className="col-6 user-title">
                        User ID
                    </div>

                    <div className="col-6 user-value">
                        {userId}
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Your Node
                    </div>

                    <div className="col-6 user-value">
                        {yourNodes} <small>Nodes</small>
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Sponsor
                    </div>

                    <div className="col-6 user-value">
                        {referredForm}
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        At Price
                    </div>

                    <div className="col-6 user-value">
                        {atPrice} <small>USDT</small>
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Direct
                    </div>

                    <div className="col-6 user-value">
                        {referredUsers} <small>Users</small>
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Team Income
                    </div>

                    <div className="col-6 user-value">
                        {totalIncome} <small>USDT</small>
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Root Balance
                    </div>

                    <div className="col-6 user-value">
                        {rootBalance} <small>KBC</small>
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Assured Reward
                    </div>

                    <div className="col-6 user-value">
                        {assuredReward} <small>KBC</small>
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Team Size
                    </div>

                    <div className="col-6 user-value">
                        {teamSize}
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Taken ROI
                    </div>

                    <div className="col-6 user-value">
                        {tokenRoi} <small>KBC</small>
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Taken ROI Till
                    </div>

                    <div className="col-6 user-value">
                        {stakeTimes}
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Income Missed
                    </div>

                    <div className="col-6 user-value">
                        {incomeMissed}
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Register Time
                    </div>

                    <div className="col-6 user-value">
                        {registerTime}
                    </div>

                </div>

                <div className="user-item">

                    <div className="col-6 user-title">
                        Mint Days
                    </div>

                    <div className="col-6 user-value">
                        {mintDays}
                    </div>

                </div>

            </div>

        </div>

    );

};

export default UserInfo;