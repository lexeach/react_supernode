import React, { useState } from "react";

const PoolHistory = ({
    data = {},
    searchDistributionPool,
}) => {

    const [round, setRound] = useState("");

    const {

        top4PoolForwarded = "0.00",
        actualTO = "0.00",
        top4Pool = "0.00",
        top4Pool2Distribute = "0.00",
        contractAddress = ""

    } = data;

    const handleSearch = () => {

        if (searchDistributionPool) {

            searchDistributionPool(round);

        }

    };

    const copyContractAddress = () => {

        navigator.clipboard.writeText(contractAddress);

        alert("Contract Address Copied");

    };

    return (

        <div className="col-lg-6">

            <div className="d-flex justify-content-center mt-4">

                <div className="network-heading text-center rounded-top-2">

                    Top 4 Pool History

                </div>

            </div>

            <div className="reward-box">

                <div className="d-flex justify-content-center">

                    <span className="text-pink fs-3">

                        TOP 4 POOL History

                    </span>

                </div>

                {/* Pool Forwarded */}

                <div className="text-center mt-2">

                    <p className="m-0 text-warning">

                        Top 4 Pool Forwarded

                    </p>

                    <p className="m-0">

                        <span className="fw-bold">

                            {top4PoolForwarded}

                        </span>

                        {" "}USDT

                    </p>

                    <div className="d-flex justify-content-center">

                        <div className="bar"></div>

                    </div>

                </div>

                {/* Fresh TO */}

                <div className="text-center mt-2">

                    <p className="m-0 text-warning">

                        Fresh TO

                    </p>

                    <p className="m-0">

                        <span className="fw-bold">

                            {actualTO}

                        </span>

                        {" "}USDT

                    </p>

                    <div className="d-flex justify-content-center">

                        <div className="bar"></div>

                    </div>

                </div>

                {/* Pool */}

                <div className="text-center mt-2">

                    <p className="m-0 text-warning">

                        Top 4 Pool

                    </p>

                    <p className="m-0">

                        <span className="fw-bold">

                            {top4Pool}

                        </span>

                        {" "}USDT

                    </p>

                    <div className="d-flex justify-content-center">

                        <div className="bar"></div>

                    </div>

                </div>

                {/* Pool Distribution */}

                <div className="text-center mt-2">

                    <p className="m-0 text-warning">

                        Top 4 Pool2 Distribute

                    </p>

                    <p className="m-0">

                        <span className="fw-bold">

                            {top4Pool2Distribute}

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

                                value={round}

                                onChange={(e) =>
                                    setRound(e.target.value)
                                }

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

                {/* Contract Address */}

                <div className="text-center mt-3">

                    <p className="text-warning">

                        Contract Address

                    </p>

                    <p

                        className="m-0"

                        style={{
                            cursor: "pointer",
                            color: "rgb(255,0,238)"
                        }}

                        onClick={copyContractAddress}

                    >

                        Contract Detail :

                        {" "}

                        {contractAddress}

                    </p>

                </div>

            </div>

        </div>

    );

};

export default PoolHistory;