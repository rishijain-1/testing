import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-wrapper-about-us">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="">
              <h1 className="heading-3 font-weight-semibold clr-text mb-lg-0">
                About GetGrahak
              </h1>
              <div className="fs-24 pt-2">
                <p>Unveiling GetGrahak&apos;s Exclusive Backstage.</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 w-100 image-column-about ">
            <div className="image-container-rectangular">
              <img src="/about/team.webp" alt="team" className="img-fluid" />
            </div>
            <div class="purple-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
