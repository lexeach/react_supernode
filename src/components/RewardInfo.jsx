import React from "react";

const RewardInfo = ({ data = {} }) => {

    const {

        teamSize = 0,
        turnover = "0.00",
        rank = 0,
        directReferred = 0,

        starOneValue = 0,
        starOnePaid = "No",

        starTwoValue = 0,
        starTwoPaid = "No",

        starThreeValue = 0,
        starThreePaid = "No",

        starFourValue = 0,
        starFourPaid = "No",

        starFiveValue = 0,
        starFivePaid = "No",

        starSixValue = 0,
        starSixPaid = "No",

        starSevenValue = 0,
        starSevenPaid = "No",

    } = data;

    const rewards = [

        {
            star: "Star One",
            value: starOneValue,
            paid: starOnePaid
        },

        {
            star: "Star Two",
            value: starTwoValue,
            paid: starTwoPaid
        },

        {
            star: "Star Three",
            value: starThreeValue,
            paid: starThreePaid
        },

        {
            star: "Star Four",
            value: starFourValue,
            paid: starFourPaid
        },

        {
            star: "Star Five",
            value: starFiveValue,
            paid: starFivePaid
        },

        {
            star: "Star Six",
            value: starSixValue,
            paid: starSixPaid
        },

        {
            star: "Star Seven",
            value: starSevenValue,
            paid: starSevenPaid
        }

    ];

    return (

        <div className="col-lg-6">

            {/* Heading */}

            <div className="d-flex justify-content-center mt-4">

                <div className="network-heading text-center rounded-top-2">

                    KBC Reward Info

                </div>

            </div>

            {/* Summary */}

            <div className="network-box">

                <div className="row">

                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 network-item">

                        <p className="network-number m-0 p-0">

                            {teamSize}

                        </p>

                        <p className="network-title m-0 p-0">

                            Team Size

                        </p>

                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 network-item">

                        <p className="network-number m-0 p-0">

                            {turnover} USDT

                        </p>

                        <p className="network-title m-0 p-0">

                            Turnover

                        </p>

                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 network-item">

                        <p className="network-number m-0 p-0">

                            {rank}

                        </p>

                        <p className="network-title m-0 p-0">

                            Rank

                        </p>

                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 network-item">

                        <p className="network-number m-0 p-0">

                            {directReferred}

                        </p>

                        <p className="network-title m-0 p-0">

                            Direct Referred

                        </p>

                    </div>

                </div>

            </div>

            {/* Rewards */}

            <div className="user-box1">

                <div className="d-flex justify-content-center">

                    <span className="text-pink fs-3">

                        Ranks

                    </span>

                </div>

                {/* Header */}

                <div className="user-item">

                    <div className="col-6 user-title">

                        Stars No

                    </div>

                    <div className="col-3 user-value">

                        My Direct

                    </div>

                    <div className="col-3 user-value">

                        Paid

                    </div>

                </div>

                {

                    rewards.map((item, index) => (

                        <div
                            className="user-item"
                            key={index}
                        >

                            <div className="col-6 user-title">

                                {item.star}

                            </div>

                            <div className="col-3 user-value">

                                {item.value}

                            </div>

                            <div className="col-3 user-value">

                                {

                                    item.paid === true ||

                                    item.paid === "Yes"

                                        ? "Yes"

                                        : "No"

                                }

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default RewardInfo;