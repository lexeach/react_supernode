import React, { useState } from "react";

const NetworkInfo = ({
    data = {},
    winnerCountdown = "",
    searchTodayWinner,
}) => {

    const [search, setSearch] = useState("");

    const {

        totalNodes = 0,
        soldNodes = 0,
        nodePrice = "0.00",
        endTime = "--",

        topOneAddress = "",
        topOneValue = "0.00",

        topTwoAddress = "",
        topTwoValue = "0.00",

        topThreeAddress = "",
        topThreeValue = "0.00",

        topFourAddress = "",
        topFourValue = "0.00",

    } = data;

    const handleSearch = () => {

        if (searchTodayWinner) {

            searchTodayWinner(search);

        }

    };

    return (

        <div className="col-lg-6">

            {/* Heading */}

            <div className="d-flex justify-content-center mt-4">

                <div className="network-heading text-center rounded-top-2">

                    KBC Network Info

                </div>

            </div>

            {/* Network Information */}

            <div className="network-box">

                <div className="row">

                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 network-item">

                        <p className="network-number m-0 p-0">

                            {totalNodes}

                            <span className="sub-title">

                                Nodes

                            </span>

                        </p>

                        <p className="network-title m-0 p-0">

                            Total Nodes

                        </p>

                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 network-item">

                        <p className="network-number m-0 p-0">

                            {soldNodes}

                            <span className="sub-title">

                                Nodes

                            </span>

                        </p>

                        <p className="network-title m-0 p-0">

                            Sold Node

                        </p>

                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 network-item">

                        <p className="network-number m-0 p-0">

                            {nodePrice}

                            <span className="sub-title">

                                USDT

                            </span>

                        </p>

                        <p className="network-title m-0 p-0">

                            Node Price

                        </p>

                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 network-item">

                        <p className="network-number m-0 p-0">

                            {endTime}

                        </p>

                        <p className="network-title m-0 p-0">

                            End Time

                        </p>

                    </div>

                </div>

            </div>

            {/* Today's Winner */}

            <div className="reward-box">

                <div className="d-flex justify-content-center">

                    <span className="text-pink fs-3">

                        Today's Winner

                    </span>

                    <span className="text-pink fs-3 ms-2">

                        {winnerCountdown}

                    </span>

                </div>

                {/* Top 1 */}

                <div className="text-center mt-2">

                    <p className="m-0 text-warning">

                        Top First

                    </p>

                    <p className="m-0">

                        {topOneAddress}

                    </p>

                    <p className="m-0">

                        Turnover :

                        <span className="fw-bold">

                            {" "} {topOneValue}

                        </span>

                        {" "}USDT

                    </p>

                    <div className="d-flex justify-content-center">

                        <div className="bar"></div>

                    </div>

                </div>

                {/* Top 2 */}

                <div className="text-center mt-2">

                    <p className="m-0 text-warning">

                        Top Second

                    </p>

                    <p className="m-0">

                        {topTwoAddress}

                    </p>

                    <p className="m-0">

                        Turnover :

                        <span className="fw-bold">

                            {" "} {topTwoValue}

                        </span>

                        {" "}USDT

                    </p>

                    <div className="d-flex justify-content-center">

                        <div className="bar"></div>

                    </div>

                </div>

                {/* Top 3 */}

                <div className="text-center mt-2">

                    <p className="m-0 text-warning">

                        Top Third

                    </p>

                    <p className="m-0">

                        {topThreeAddress}

                    </p>

                    <p className="m-0">

                        Turnover :

                        <span className="fw-bold">

                            {" "} {topThreeValue}

                        </span>

                        {" "}USDT

                    </p>

                    <div className="d-flex justify-content-center">

                        <div className="bar"></div>

                    </div>

                </div>

                {/* Top 4 */}

                <div className="text-center mt-2">

                    <p className="m-0 text-warning">

                        Top Fourth

                    </p>

                    <p className="m-0">

                        {topFourAddress}

                    </p>

                    <p className="m-0">

                        Turnover :

                        <span className="fw-bold">

                            {" "} {topFourValue}

                        </span>

                        {" "}USDT

                    </p>

                    <div className="d-flex justify-content-center">

                        <div className="bar"></div>

                    </div>

                </div>

                {/* Search */}

                <div className="text-center mt-3">

                    <div className="row justify-content-center">

                        <div className="col-md-6">

                            <input

                                type="text"

                                className="form-control"

                                placeholder="Search..."

                                value={search}

                                onChange={(e) => setSearch(e.target.value)}

                                onKeyDown={(e) => {

                                    if (e.key === "Enter") {

                                        handleSearch();

                                    }

                                }}

                            />

                        </div>

                        <div className="col-md-2">

                            <button

                                className="mybtn2"

                                onClick={handleSearch}

                            >

                                Search

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default NetworkInfo;