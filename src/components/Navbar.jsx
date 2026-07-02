import React from "react";

const Navbar = ({
    walletAddress,
    connectWallet,
    loading = false,
}) => {

    const buttonText = walletAddress
        ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(
              walletAddress.length - 4
          )}`
        : "Not Connected";

    return (
        <>
            {/* ================= Navbar ================= */}

            <nav className="navbar bg-dashboard">
                <div className="container-fluid d-flex justify-content-center">

                    <div>

                        <a className="navbar-brand" href="#">

                            <img
                                src="/assets/logo.png"
                                alt="Logo"
                                width="140"
                                height="24"
                                className="d-inline-block align-text-top"
                            />

                        </a>

                    </div>

                </div>
            </nav>

            {/* ============== Wallet Button ============== */}

            <div className="d-flex justify-content-center input-section">

                <button
                    id="notConnectedButton"
                    className="mybtn1"
                    onClick={connectWallet}
                    disabled={loading}
                >
                    {loading ? "Connecting..." : buttonText}
                </button>

            </div>
        </>
    );
};

export default Navbar;