import React from "react";

const Statistics = ({
    data = {},
    roiCountdown = "",
}) => {

    const {
        availableBalance = "0.00",
        myNodes = 0,
        totalIncome = "0.00",
        withdrawableROI = "0.00",

        top4PoolForwarded = "0.00",
        actualTO = "0.00",
        top4Pool = "0.00",
        top4Pool2Distribute = "0.00",
    } = data;

    return (
        <>

            {/* ==============================
                    Statistics Card 1
            ============================== */}

            <div className="head-card skew mx-5 mt-4">

                <div className="row">

                    <div className="col-lg-3 col-sm-6">

                        <div className="box">

                            <p className="cards-numbers">
                                {availableBalance}
                                <span className="sub-number">
                                    {" "}KBC
                                </span>
                            </p>

                            <p className="cards-title">
                                Total Mintable
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6">

                        <div className="box">

                            <p className="cards-numbers">
                                {myNodes}
                                <span className="sub-number">
                                    {" "}Node
                                </span>
                            </p>

                            <p className="cards-title">
                                My Node
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6">

                        <div className="box">

                            <p className="cards-numbers">
                                {totalIncome}
                                <span className="sub-number">
                                    {" "}USDT
                                </span>
                            </p>

                            <p className="cards-title">
                                Total Income
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6">

                        <div className="box">

                            <p className="cards-numbers">
                                {withdrawableROI}
                                <span className="sub-number">
                                    {" "}KBC
                                </span>
                            </p>

                            <p className="cards-title">

                                Withdrawable ROI

                                <span className="text-pink fs-6 ms-2">
                                    {roiCountdown}
                                </span>

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* ==============================
                    Statistics Card 2
            ============================== */}

            <div className="head-card skew mx-5 mt-4">

                <div className="row">

                    <div className="col-lg-3 col-sm-6">

                        <div className="box">

                            <p className="cards-numbers">
                                {top4PoolForwarded}
                                <span className="sub-number">
                                    {" "}USDT
                                </span>
                            </p>

                            <p className="cards-title">
                                Top4 Pool Forwarded
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6">

                        <div className="box">

                            <p className="cards-numbers">
                                {actualTO}
                                <span className="sub-number">
                                    {" "}USDT
                                </span>
                            </p>

                            <p className="cards-title">
                                Fresh TO
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6">

                        <div className="box">

                            <p className="cards-numbers">
                                {top4Pool}
                                <span className="sub-number">
                                    {" "}USDT
                                </span>
                            </p>

                            <p className="cards-title">
                                Top4 Pool
                            </p>

                        </div>

                    </div>

                    <div className="col-lg-3 col-sm-6">

                        <div className="box">

                            <p className="cards-numbers">
                                {top4Pool2Distribute}
                                <span className="sub-number">
                                    {" "}USDT
                                </span>
                            </p>

                            <p className="cards-title">
                                Top4 Pool2 Distribute
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default Statistics;