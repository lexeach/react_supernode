import React from "react";

const Loader = ({ loading = false }) => {

    if (!loading) return null;

    return (

        <div
            className="loader-wrapper"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.8)",
                zIndex: 999999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <div className="text-center">

                {/* Loader GIF */}

                <img
                    src="/assets/images/loader.gif"
                    alt="Loading..."
                    style={{
                        width: "80px",
                        height: "80px",
                    }}
                />

                {/* Loading Text */}

                <p
                    className="text-white mt-3"
                    style={{
                        fontSize: "18px",
                        fontWeight: "600",
                    }}
                >
                    Please Wait...
                </p>

            </div>

        </div>

    );

};

export default Loader;