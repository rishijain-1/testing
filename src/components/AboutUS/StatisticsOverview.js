import { useEffect, useState } from 'react';
import React from 'react';
import Stats from './Stats';
import { Swiper, SwiperSlide } from 'swiper/react';

const StatisticsOverview = () => {
  const [swiperInitialized, setSwiperInitialized] = useState(false);

  const clients = [
    '/about/agencys/Goldman-agency-2.svg',
    '/about/agencys/agency-1.svg',
    // Add more client images as needed
  ];

  useEffect(() => {
    // Setting swiperInitialized to true to trigger client-side rendering
    setSwiperInitialized(true);
  }, []);

  if (!swiperInitialized) {
    return null; // Render nothing until Swiper is initialized
  }
  return (
    <section className="digi-services bg-black pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="mb-4 mb-sm-5">
              <div className="ca-subheading-gradient mb-3"></div>
              <h1 className=" h2 main-text-value text-white">
                GetGrahak By The Numbers
              </h1>
            </div>
          </div>
        </div>
        <Stats />
      </div>
      <div className="section-space--sm-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="ca-client-slider">
                <Swiper
                  className=""
                  spaceBetween={30}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {clients.map((client, index) => (
                    <SwiperSlide key={index} className="text-center">
                      <img src={client} alt="client" className="img-fluid" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsOverview;
