import React from 'react';
import Link from 'next/link';

const FeatureAndPricing = () => {
  return (
    <>
      <section class="ptb-60">
        <div class="container">
          <div class="row">
            <div class="rounded bg-primary-pink p-5">
              <h3 class="text-2xl-heading text-center text-purple-500 mb-4">
                Need detailed information on features &amp; pricing?
              </h3>
              <h2 class="text-4xl-heading text-center mb-6 text-black">
                No matter what you sell, GetGrahak works for you.
              </h2>
              <p class=" text-center text-md-copy mb-3 pt-3 pb-3 text-black">
                Start selling in less than 2 minutes!
              </p>
              <div className="action-btns mtb-4 align-items-center text-center">
                <Link legacyBehavior href="/">
                  <a className="btn btn-primary bg-pink me-3 mb-3">
                    Open your store for Free
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureAndPricing;
