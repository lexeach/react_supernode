import React from "react";

const LevelInfo = ({ data = {} }) => {

    const levels = [

        {
            level: 1,
            team: data.level1Round || 0,
            income: data.level1Income || "0"
        },

        {
            level: 2,
            team: data.level2Round || 0,
            income: data.level2Income || "0"
        },

        {
            level: 3,
            team: data.level3Round || 0,
            income: data.level3Income || "0"
        },

        {
            level: 4,
            team: data.level4Round || 0,
            income: data.level4Income || "0"
        },

        {
            level: 5,
            team: data.level5Round || 0,
            income: data.level5Income || "0"
        },

        {
            level: 6,
            team: data.level6Round || 0,
            income: data.level6Income || "0"
        },

        {
            level: 7,
            team: data.level7Round || 0,
            income: data.level7Income || "0"
        },

        {
            level: 8,
            team: data.level8Round || 0,
            income: data.level8Income || "0"
        },

        {
            level: 9,
            team: data.level9Round || 0,
            income: data.level9Income || "0"
        },

        {
            level: 10,
            team: data.level10Round || 0,
            income: data.level10Income || "0"
        },

        {
            level: 11,
            team: data.level11Round || 0,
            income: data.level11Income || "0"
        },

        {
            level: 12,
            team: data.level12Round || 0,
            income: data.level12Income || "0"
        },

        {
            level: 13,
            team: data.level13Round || 0,
            income: data.level13Income || "0"
        },

        {
            level: 14,
            team: data.level14Round || 0,
            income: data.level14Income || "0"
        },

        {
            level: 15,
            team: data.level15Round || 0,
            income: data.level15Income || "0"
        }

    ];

    return (

        <div className="col-lg-6 mt-4">

            <div className="d-flex justify-content-center mt-4">

                <div className="network-heading text-center rounded-top-2">

                    KBC User Level Info

                </div>

            </div>

            <div className="user-box">

                {/* Header */}

                <div className="user-item">

                    <div className="col-6 user-title">

                        Level Number

                    </div>

                    <div className="col-3 user-value">

                        Team

                    </div>

                    <div className="col-3 user-value">

                        Income

                    </div>

                </div>

                {/* Levels */}

                {

                    levels.map((item) => (

                        <div
                            className="user-item"
                            key={item.level}
                        >

                            <div className="col-6 user-title">

                                Level {item.level}

                            </div>

                            <div className="col-3 user-value">

                                {item.team}

                            </div>

                            <div className="col-3 user-value">

                                {item.income} USDT

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default LevelInfo;