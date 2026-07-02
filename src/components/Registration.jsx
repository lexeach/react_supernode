import React, { useState } from "react";

const Registration = ({
    nodePrice = "0",
    payNow,
    visible = true,
    loading = false,
}) => {

    const [nodeQuantity, setNodeQuantity] = useState("");
    const [referralId, setReferralId] = useState("0");

    const handleSubmit = () => {

        if (!nodeQuantity || Number(nodeQuantity) <= 0) {

            alert("Please enter valid node quantity.");

            return;

        }

        if (!referralId) {

            alert("Please enter Referral ID.");

            return;

        }

        if (payNow) {

            payNow({

                nodeQuantity,

                referralId,

            });

        }

    };

    if (!visible) return null;

    return (

        <div className="col-lg-6 mt-4">

            <div className="swap-wrap p-5">

                <div className="swap-head text-center">

                    Buy Node, Earn KBC

                    <br />

                    Node Price :

                    <span className="text-warning">

                        {" "}

                        {nodePrice} USDT

                    </span>

                </div>

                <div className="swap">

                    <div className="swap-box">

                        <div className="node">

                            <p className="node-title">

                                Node Quantity

                            </p>

                            <input

                                className="input-node form-control"

                                type="number"

                                min="1"

                                placeholder="Node Quantity"

                                value={nodeQuantity}

                                onChange={(e) =>
                                    setNodeQuantity(e.target.value)
                                }

                            />

                        </div>

                        <div className="pay mt-2">

                            <p className="node-title">

                                Referral ID

                            </p>

                            <input

                                className="input-node form-control"

                                type="number"

                                placeholder="Referral ID"

                                value={referralId}

                                onChange={(e) =>
                                    setReferralId(e.target.value)
                                }

                            />

                        </div>

                        <div className="pay text-center mt-5">

                            <button

                                className="mybtn1 border-0"

                                disabled={loading}

                                onClick={handleSubmit}

                            >

                                {

                                    loading

                                        ? "Processing..."

                                        : "Pay Now"

                                }

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Registration;