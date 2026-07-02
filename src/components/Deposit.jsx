import React, { useState } from "react";

const Deposit = ({
    visible = true,
    loading = false,
    depositKBC,
}) => {

    const [amount, setAmount] = useState("");

    const handleDeposit = () => {

        if (!amount || Number(amount) <= 0) {

            alert("Please enter a valid amount.");

            return;

        }

        if (depositKBC) {

            depositKBC(amount);

        }

    };

    if (!visible) return null;

    return (

        <div className="col-lg-6 mt-4">

            <div className="swap-wrap p-5">

                <div className="swap-head text-center">

                    Deposit KBC

                    <br />

                </div>

                <div className="swap">

                    <div className="swap-box">

                        <div className="node">

                            <p className="node-title">

                                Deposit Amount

                            </p>

                            <input

                                className="input-node bg-dashboard form-control ps-2"

                                type="number"

                                placeholder="Amount"

                                value={amount}

                                onChange={(e) =>
                                    setAmount(e.target.value)
                                }

                            />

                        </div>

                        <div className="pay text-center mt-5">

                            <button

                                className="mybtn1 border-0"

                                disabled={loading}

                                onClick={handleDeposit}

                            >

                                {

                                    loading

                                        ? "Processing..."

                                        : "Deposit KBC"

                                }

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Deposit;