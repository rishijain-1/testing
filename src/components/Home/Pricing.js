import React, { useState } from 'react';

const Pricing = () => {
  const [pricingType, setPricingType] = useState('yearly');

  const handlePricingSwitch = (type) => {
    setPricingType(type);
  };
  return (
    <>
      <section className="sc-pricing-section position-relative z-1 overflow-hidden ptb-100 border-line-bg">
        <div className="container">
          <div className="row justify-content-between align-items-center g-3">
            <div className="col-xl-5 col-lg-6">
              <div className="section-title text-center text-lg-start">
                <h2 className="mb-0 sc-heading-color clr-text">
                  Choose the{' '}
                  <make className="ail-highlighted-text">Plan that’s </make>Right
                  for you
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="text-center text-lg-end mt-3 mt-lg-0">
                <div className="sc-pricing-switch d-inline-flex bg-white ail rounded overflow-hidden">
                  <button
                    type="button"
                    className={pricingType === 'yearly' ? 'active' : ''}
                    onClick={() => handlePricingSwitch('yearly')}
                  >
                    Yearly
                  </button>
                  <button
                    type="button"
                    className={pricingType === 'lifetime' ? 'active' : ''}
                    onClick={() => handlePricingSwitch('lifetime')}
                  >
                    Lifetime
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-2 justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="sc-pricing-column bg-white rounded">
                <div className="sc-pricing-title d-flex align-items-center">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-4">
                    <svg
                      width="37"
                      height="36"
                      viewBox="0 0 37 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.35"
                        d="M34.0241 21.7544L6.62149 35.4567C3.57867 36.9781 0 34.7658 0 31.3651L0 4.58065C0 1.17996 3.57867 -1.03231 6.61958 0.489104L34.0222 14.1914C37.1397 15.7491 37.1397 20.1966 34.0241 21.7544Z"
                        fill="#4A3AFF"
                      />
                      <path
                        d="M23.778 19.2552L0 23.7141L0 12.2318L23.778 16.6908C25.198 16.9568 25.198 18.9891 23.778 19.2552Z"
                        fill="#4A3AFF"
                      />
                    </svg>
                  </span>
                  <div className="sc-pricing-title-right ms-3">
                    <h6 className="mb-0 text-dg-color">Lifetime FREE</h6>
                    <h4 className="mb-0 mt-1">Basic</h4>
                  </div>
                </div>
                <p className="mt-4 mb-4">
                  Get started for free with essential features to explore our
                  platform.
                </p>
                <div className={`pricing-amount ${pricingType}`}>
                  <h1 className="d-inline-block mb-3">
                    <i
                      className="fa-solid fa-indian-rupee-sign"
                      aria-hidden="true"
                    ></i>
                    {pricingType === 'yearly' ? '0' : '0'}
                  </h1>
                  <h5 className="d-inline-block text-dg-color fw-normal mb-3">
                    {pricingType === 'yearly' ? '/yearly' : '/lifetime'}
                  </h5>
                </div>
                <h6 className="mb-4">What&apos;s included</h6>
                <ul className="pricing-features mb-40 list-unstyled">
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Create Up to <strong>1</strong> Asset or Document
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Allowed Document Size: <strong>1 MB</strong> Per File
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Upload Up to <strong>1 File</strong> Per Asset
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <strong>Lifetime</strong> Wellness checker
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Lifetime notifications
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Get notiications on <strong>Email</strong>
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-xmark"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Get notiications on <strong>WhatsApp</strong>
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-xmark"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Get notiications on <strong>Text</strong>
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-xmark"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Get notiications on <strong>Phone Call</strong>
                  </li>
                </ul>
                <a href="#" className="btn sc-outline-btn">
                  Get started now
                </a>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="sc-pricing-column popular rounded">
                <div className="sc-pricing-title d-flex align-items-center">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-4">
                    <svg
                      width="37"
                      height="36"
                      viewBox="0 0 37 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.35"
                        d="M34.0241 21.7544L6.62149 35.4567C3.57867 36.9781 0 34.7658 0 31.3651L0 4.58065C0 1.17996 3.57867 -1.03231 6.61958 0.489104L34.0222 14.1914C37.1397 15.7491 37.1397 20.1966 34.0241 21.7544Z"
                        fill="#4A3AFF"
                      />
                      <path
                        d="M23.778 19.2552L0 23.7141L0 12.2318L23.778 16.6908C25.198 16.9568 25.198 18.9891 23.778 19.2552Z"
                        fill="#4A3AFF"
                      />
                    </svg>
                  </span>
                  <div className="sc-pricing-title-right ms-3">
                    <h6 className="mb-0 text-dg-color">For individuals</h6>
                    <h4 className="mb-0 mt-1">Essential Legacy</h4>
                  </div>
                </div>
                <p className="mt-4 mb-4">
                  Perfect for those starting their legacy planning journey with
                  core asset management features.
                </p>
                <div className={`pricing-amount ${pricingType}`}>
                  <h1 className="d-inline-block mb-3">
                    <i
                      className="fa-solid fa-indian-rupee-sign"
                      aria-hidden="true"
                    ></i>
                    {pricingType === 'yearly' ? '1,999 ' : '9,999'}
                  </h1>
                  <h5 className="d-inline-block text-dg-color fw-normal mb-3">
                    {pricingType === 'yearly' ? '/yearly' : '/liftime'}
                  </h5>
                </div>
                <h6 className="mb-4">What&apos;s included</h6>
                <ul className="pricing-features mb-40 list-unstyled">
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    Create Unlimited Asset or Document
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    Allowed Document Size: 5 MB Per File
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    Upload Up to 3 File Per Asset
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    Lifetime Wellness checker
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    Lifetime notifications
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    Get notications on Email
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-check"></i>
                    </span>
                    Get notiications on WhatsApp
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-xmark"></i>
                    </span>
                    Get notiications on SMS Text
                  </li>
                  <li>
                    <span className="me-3">
                      <i className="fa-solid fa-circle-xmark"></i>
                    </span>
                    Get notiications on Phone Call
                  </li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Get started now
                </a>
              </div>
            </div>

            <div className="col-xl-4 col-md-6">
              <div className="sc-pricing-column bg-white rounded">
                <div className="sc-pricing-title d-flex align-items-center">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-4">
                    <svg
                      width="37"
                      height="36"
                      viewBox="0 0 37 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.35"
                        d="M34.0241 21.7544L6.62149 35.4567C3.57867 36.9781 0 34.7658 0 31.3651L0 4.58065C0 1.17996 3.57867 -1.03231 6.61958 0.489104L34.0222 14.1914C37.1397 15.7491 37.1397 20.1966 34.0241 21.7544Z"
                        fill="#4A3AFF"
                      />
                      <path
                        d="M23.778 19.2552L0 23.7141L0 12.2318L23.778 16.6908C25.198 16.9568 25.198 18.9891 23.778 19.2552Z"
                        fill="#4A3AFF"
                      />
                    </svg>
                  </span>
                  <div className="sc-pricing-title-right ms-3">
                    <h6 className="mb-0 text-dg-color">Best for Everyone</h6>
                    <h4 className="mb-0 mt-1">Complete Protection</h4>
                  </div>
                </div>
                <p className="mt-4 mb-4">
                  A balanced plan offering extended asset management, secure
                  notifications, and family support.
                </p>
                <div className={`pricing-amount ${pricingType}`}>
                  <h1 className="d-inline-block mb-3">
                    <i
                      className="fa-solid fa-indian-rupee-sign"
                      aria-hidden="true"
                    ></i>
                    {pricingType === 'yearly' ? '2,999' : '11,999'}
                  </h1>
                  <h5 className="d-inline-block text-dg-color fw-normal mb-3">
                    {pricingType === 'yearly' ? '/yearly' : '/liftime'}
                  </h5>
                </div>
                <h6 className="mb-4">What&apos;s included</h6>
                <ul className="pricing-features mb-40 list-unstyled">
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Create <strong>Unlimited</strong> Asset or Document
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Allowed Document Size: <strong>50 MB</strong> Per File
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Upload Up to <strong>20 File</strong> Per Asset
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <strong>Lifetime</strong> Wellness checker
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Lifetime notifications
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Get notications on <strong>Email</strong>
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Get notiications on <strong>WhatsApp</strong>
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Get notiications on <strong>SMS Text</strong>
                  </li>
                  <li>
                    <span className="me-3">
                      <i
                        className="fa-solid fa-circle-check"
                        aria-hidden="true"
                      ></i>
                    </span>
                    Get notiications on <strong>Phone Call</strong>
                  </li>
                </ul>
                <a href="#" className="btn sc-outline-btn">
                  Get started now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5 pt-60">
          <div className="col-lg-3">
            <div className="media d-flex align-items-center py-2 p-sm-2">
              <div className="icon-box mb-0 bg-primary-soft rounded-circle d-block me-3">
                <i
                  className="fas fa-credit-card text-primary"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="media-body fw-medium h6 mb-0">
                No credit card required
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="media d-flex align-items-center py-2 p-sm-2">
              <div className="icon-box mb-0 bg-success-soft rounded-circle d-block me-3">
                <i
                  className="fas fa-calendar-check text-success"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="media-body fw-medium h6 mb-0">Try for FREE</div>
            </div>
          </div>
          {/* <!-- <div className="col-lg-3">
                        <div className="media d-flex align-items-center py-2 p-sm-2">
                            <div className="icon-box mb-0 bg-danger-soft rounded-circle d-block me-3">
                                <i className="fas fa-calendar-times text-danger"></i>
                            </div>
                            <div className="media-body fw-medium h6 mb-0">
                                Cancel anytime
                            </div>
                        </div>
                    </div> --> */}
        </div>
      </section>
    </>
  );
};

export default Pricing;
