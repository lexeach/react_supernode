import React from "react";

const Footer = ({
    contractAddress = "",
    website = "https://yourwebsite.com",
    telegram = "#",
    twitter = "#",
    youtube = "#",
    whitepaper = "#",
}) => {

    const copyContract = () => {

        if (!contractAddress) return;

        navigator.clipboard.writeText(contractAddress);

        alert("Contract Address Copied Successfully.");

    };

    return (

        <footer className="footer-section mt-5">

            <div className="container">

                <div className="row">

                    {/* Logo */}

                    <div className="col-lg-4 col-md-6 mb-4">

                        <img
                            src="/assets/logo.png"
                            alt="Logo"
                            className="img-fluid mb-3"
                            style={{ maxWidth: "180px" }}
                        />

                        <p className="text-light">

                            Buy Node, Build Network & Earn KBC Rewards.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div className="col-lg-4 col-md-6 mb-4">

                        <h5 className="text-warning">

                            Quick Links

                        </h5>

                        <ul className="list-unstyled">

                            <li>

                                <a
                                    href={website}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Website
                                </a>

                            </li>

                            <li>

                                <a
                                    href={whitepaper}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Whitepaper
                                </a>

                            </li>

                            <li>

                                <a
                                    href={telegram}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Telegram
                                </a>

                            </li>

                            <li>

                                <a
                                    href={twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Twitter / X
                                </a>

                            </li>

                            <li>

                                <a
                                    href={youtube}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    YouTube
                                </a>

                            </li>

                        </ul>

                    </div>

                    {/* Contract */}

                    <div className="col-lg-4 col-md-12">

                        <h5 className="text-warning">

                            Smart Contract

                        </h5>

                        <p
                            style={{
                                cursor: "pointer",
                                wordBreak: "break-all"
                            }}
                            onClick={copyContract}
                        >

                            {contractAddress}

                        </p>

                        <button
                            className="mybtn1"
                            onClick={copyContract}
                        >

                            Copy Address

                        </button>

                    </div>

                </div>

                <hr />

                <div className="text-center text-light pb-3">

                    © {new Date().getFullYear()} KBC.
                    All Rights Reserved.

                </div>

            </div>

        </footer>

    );

};

export default Footer;