import React from 'react';
import Link from 'next/link';

const ComapareWithOther = () => {
  return (
    <>
      <div className="ptb-60">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="text-center other-comparison-text mb-5">
              Other comparisons
            </h2>

            {/* First comparison */}
            <div className="col-lg-5 col-md-6 col-12 mb-4">
              <div className="d-flex justify-content-around align-items-center">
                <div className="col-4 text-center">
                  <img
                    src="/CompareWhyUs/gg-logo.webp"
                    alt="gg-logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-4 text-center">
                  <p className="vs-text">vs</p>
                </div>
                <div className="col-4 text-center">
                  <img
                    src="/CompareWhyUs/shopify-logo.svg"
                    alt="shopify-logo"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="action-btns mtb-4 align-items-center text-center pt-4">
                <Link legacyBehavior href="/">
                  <a className="btn btn-primary bg-pink me-3 mb-3">
                    See Full comparison
                  </a>
                </Link>
              </div>
            </div>

            {/* Second comparison */}
            <div className="col-lg-5 col-md-6 col-12 mb-4">
              <div className="d-flex justify-content-around align-items-center">
                <div className="col-4 text-center">
                  <img
                    src="/CompareWhyUs/gg-logo.webp"
                    alt="gg-logo"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-4 text-center">
                  <p className="vs-text">vs</p>
                </div>
                <div className="col-4 text-center">
                  <img
                    src="/CompareWhyUs/shopify-logo.svg"
                    alt="shopify-logo"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="action-btns mtb-4 align-items-center text-center pt-4">
                <Link legacyBehavior href="/">
                  <a className="btn btn-primary bg-pink me-3 mb-3">
                    See Full comparison
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComapareWithOther;
