import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/swiper-bundle.min.css';

import SectionTitle from '../Common/SectionTitle';
import Link from 'next/link';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <section className="feature-section-two pt-60">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between justify-content-center">
            <div className="col-lg-7">
              <div className="feature-content-wrap">
                <SectionTitle
                  title="Why Get.Grahak?"
                  description=" Instantly deploy your ecommerce store, regardless of scalability."
                  leftAlign
                />
                <ul className=" mb-4">
                  <li className="d-flex align-items-start ">
                    <img src="/CompareWhyUs/RightSign.svg" alt="RightSign" />
                    <div className="icon-content">
                      <p className="fs-24 text-black">
                        Instantly set up a customised store website and apps in
                        minutes, no coding required.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start ">
                    <img src="/CompareWhyUs/RightSign.svg" alt="RightSign" />
                    <div className="icon-content">
                      <p className="fs-24 text-black">
                        Transparent pricing: pay only ₹5 to ₹9 per order based
                        on wallet recharge slab, no hidden costs.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start ">
                    <img src="/CompareWhyUs/RightSign.svg" alt="RightSign" />
                    <div className="icon-content">
                      <p className="fs-24 text-black">
                        Keep your store updated and bug-free with OTA updates
                        for a seamless user experience.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="action-btns mtb-4 align-items-center d-block d-sm-flex d-lg-flex d-md-flex">
                  <Link legacyBehavior href="/">
                    <a className="btn btn-primary bg-pink me-3 mb-3">
                      Open your store for Free
                    </a>
                  </Link>
                  <Link legacyBehavior href="/">
                    <a className="btn border-black text-black mb-3">
                      See features and pricing
                    </a>
                  </Link>
                </div>

                {/* Render Swiper only after the component has mounted */}
                {isMounted && (
                  <div className="swiper digi-logo-slider mt-20">
                    <h5 className="text-black mb-4">
                      Step into the elite league.
                    </h5>
                    <Swiper
                      className="swliper-wrapper align-items-center"
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={10}
                      loop={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        480: { slidesPerView: 1, spaceBetween: 10 },
                        900: { slidesPerView: 2, spaceBetween: 10 },
                        1024: { slidesPerView: 2, spaceBetween: 10 },
                        1280: { slidesPerView: 2, spaceBetween: 10 },
                        1440: { slidesPerView: 2, spaceBetween: 10 },
                      }}
                    >
                      <SwiperSlide>
                        <div className="single-logo ">
                          <img
                            src="/CompareWhyUs/NBC-logo.webp"
                            className="img-fluid"
                            height="30"
                            alt="logo"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-logo">
                          <img
                            src="/CompareWhyUs/makro-logo.webp"
                            className="img-fluid"
                            height="30"
                            alt="logo"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-logo">
                          <img
                            src="/CompareWhyUs/fujitsu-logo.webp"
                            className="img-fluid"
                            height="30"
                            alt="logo"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="single-logo">
                          <img
                            src="/CompareWhyUs/BBC-logo.webp"
                            className="img-fluid"
                            height="30"
                            alt="logo"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="swiper digi-logo-slider mt-40"></div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="feature-img-wrap">
                <Image
                  width={120}
                  height={100}
                  layout="responsive"
                  src="/CompareWhyUs/HeroSectionImg.svg"
                  alt="feature"
                  className="img-fluid rounded-custom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
