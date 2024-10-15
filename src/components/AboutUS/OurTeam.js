import React from 'react';
import Link from 'next/link';

const OurTeam = () => {
  return (
    <section className="better-team">
      <div className="container ">
        <div className="row">
          <div className="col-md-4 bg-purple p-5">
            <h5 className="text-white">At Get.Grahak</h5>
            <h3 className="teamops__title">Creativity Meets Intelligence</h3>
            <p className="better-team-text text-white">
              Get.Grahak has a dedicated team of experts working tirelessly to
              ensure exceptional customer service and satisfaction. From sales
              and marketing to technical support, our teams are committed to
              delivering the best experience for our valued customers.
            </p>
            <Link href="">
              <span className="cursor-pointer teamops-learn-btn">
                View Our Team
              </span>
            </Link>
          </div>
          <div className="col-md-7 col-lg-8 align-items-center text-center border d-none d-md-block">
            <img
              src="/about/our-team.svg"
              className="img-fluid "
              alt="our-team"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
