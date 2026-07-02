import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Slider = ({ data = {} }) => {

    const slides = [

        {
            title: "Current Round",
            value: data.currentRound || "0"
        },

        {
            title: "Current Round Start",
            value: data.currentRoundStart || "0"
        },

        {
            title: "Current User ID",
            value: data.currentUserId || "0"
        },

        {
            title: "End Time",
            value: data.endTime || "--"
        },

        {
            title: "Total Nodes",
            value: data.totalNodes || "0"
        },

        {
            title: "Node Price",
            value: `${data.nodePrice || "0"} USDT`
        },

        {
            title: "Taken Top4 Income",
            value: `${data.takenTop4Income || "0"} USDT`
        }

    ];

    return (

        <div className="row mt-4 px-5">

            <div className="col-lg-12">

                <Swiper

                    modules={[Autoplay]}

                    className="cryptoSlider"

                    spaceBetween={24}

                    slidesPerView={1}

                    loop={false}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    breakpoints={{

                        640: {

                            slidesPerView: 2,

                        },

                        768: {

                            slidesPerView: 2.5,

                        },

                        1024: {

                            slidesPerView: 3,

                        },

                        1200: {

                            slidesPerView: 5,

                        },

                    }}

                >

                    {

                        slides.map((item, index) => (

                            <SwiperSlide key={index}>

                                <div className="card">

                                    <div className="card-body">

                                        <div className="d-flex align-items-center justify-content-between flex-column h-100">

                                            <h6 className="slide-number">

                                                {item.value}

                                            </h6>

                                            <p className="slide-title">

                                                {item.title}

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </SwiperSlide>

                        ))

                    }

                </Swiper>

            </div>

        </div>

    );

};

export default Slider;