import Link from 'next/link';
import React from 'react';

const Experience = () => {
  return (
    <div className="bg-gradient-experience">
      <div className="container ">
        <div className="row w-100">
          <div className="col-lg-7">
            <div className="align-items-center p-2">
              <h3 className="heading-3 font-weight-semibold clr-text mb-lg-0">
                Experience Get.Grahak&apos;s Exciting Ride
              </h3>
              <p className=" fs-24 pt-3 ">
                Unlock your business&apos;s potential with GetGrahak
              </p>
              <Link href="#" className="trail-btn  border-0">
                Take your free trail now
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="position-relative pl-40 pr-100 w-100 vertical-line ">
              <img src="/about/expreience_support.webp" alt="expreience" />
              <p className="fs-24 pt-3">
                Have a question? We&apos;re here to help.
              </p>
              <div className="d-flex align-items-center gap-3 mt-30">
                <Link href="#" className="py-2">
                  <h6 className="aih-color-two fs-16">
                    Talk to en export
                    <img
                      src="/about/button.svg"
                      alt="button"
                      className="pl-15"
                    />
                  </h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
