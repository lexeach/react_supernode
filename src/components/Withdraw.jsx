import React, { useState } from "react";

const Withdraw = ({
    visible = true,
    loading = false,

    withdrawableBalance = "0.00",
    currentDayTurnover = "0.00",

    withdrawNowFunction,
    searchWithdrawal,
}) => {

    const [roundNumber, setRoundNumber] = useState("");

    const handleSearch = () => {

        if (!roundNumber) {

            alert("Please enter round number.");

            return;

        }

        if (searchWithdrawal) {

            searchWithdrawal(roundNumber);

        }

    };

    const handleWithdraw = () => {

        if (withdrawNowFunction) {

            withdrawNowFunction();

        }

    };

    if (!visible) return null;

    return (

        <div className="col-lg-6 mt-4">

            <div className="swap-wrap p-5">

                <div className="swap-head text-center">

                    Withdrawable KBC :

                    <span className="text-warning">

                        {" "}

                        {withdrawableBalance} KBC

                    </span>

                    <br />

                    <button

                        className="mybtn1 border-0 mt-2"

                        disabled={loading}

                        onClick={handleWithdraw}

                    >

                        {

                            loading

                                ? "Processing..."

                                : "Withdraw"

                        }

                    </button>

                </div>

                <div className="swap-head11 text-center">

                    <br />

                    My Turnover :

                    <span className="text-warning">

                        {" "}

                        {currentDayTurnover} USDT

                    </span>

                </div>

                <div className="swap">

                    <div className="swap-box">

                        <div className="node">

                            <p className="node-title">

                                Round Number

                            </p>

                            <input

                                className="input-node bg-dashboard form-control ps-2"

                                type="number"

                                placeholder="Round Number"

                                value={roundNumber}

                                onChange={(e) =>
                                    setRoundNumber(e.target.value)
                                }

                                onKeyDown={(e) => {

                                    if (e.key === "Enter") {

                                        handleSearch();

                                    }

                                }}

                            />

                        </div>

                        <div className="pay text-center mt-5">

                            <button

                                className="mybtn1 border-0"

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

export default Withdraw;