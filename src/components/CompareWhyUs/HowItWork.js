import React from 'react';
import Link from 'next/link';
const HowItWork = () => {
  return (
    <>
      <section className="cyber-faq bg-blue pt-60 pb-60 bg-primary-pink">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-6">
              <div className="section-heading text-center mb-5">
                <h2 className="text-center other-comparison-text mb-5">
                  Here&apos;s How it Works
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="cyber-faq-wrapper">
                <div
                  className="accordion pay-gw-faq faq-accordion"
                  id="accordionExample"
                >
                  <div
                    className="accordion-item rounded  active"
                    style={{ border: 'none' }}
                  >
                    <h5 className="accordion-header" id="faq-1">
                      <button
                        className="accordion-button text-black"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-1"
                        aria-expanded="true"
                      >
                        <span className="text-primary me-4">1</span>
                        Start Your E-commerce Journey with Ease!
                      </button>
                    </h5>
                    <div
                      id="collapse-1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faq-1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body text-black ">
                        Download the Get.Grahak App from the Play Store or App
                        Store and Use our platform to effortlessly create your
                        own custom e-commerce website and app, and start selling
                        your products online in no time.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item rounded"
                    style={{ border: 'none' }}
                  >
                    <h5 className="accordion-header" id="faq-2">
                      <button
                        className="accordion-button collapsed text-black"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-2"
                        aria-expanded="false"
                      >
                        <span className="text-primary me-4">2</span>
                        Effortless Store Setup in Minutes!
                      </button>
                    </h5>
                    <div
                      id="collapse-2"
                      className="accordion-collapse collapse"
                      aria-labelledby="faq-2"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body text-black">
                        Simply enter your store name, choose your business
                        category, and select a stunning theme that matches your
                        brand. Voila! Your store setup is complete.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item rounded"
                    style={{ border: 'none' }}
                  >
                    <h5 className="accordion-header" id="faq-3">
                      <button
                        className="accordion-button collapsed text-black"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-3"
                        aria-expanded="false"
                      >
                        <span className="text-primary me-4">3</span>
                        Quick Profile Verification Made Easy!
                      </button>
                    </h5>
                    <div
                      id="collapse-3"
                      className="accordion-collapse collapse text-black"
                      aria-labelledby="faq-3"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body text-black">
                        Verify your profile swiftly using just your phone number
                        and email address. It&apos;s a breeze!
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item rounded"
                    style={{ border: 'none' }}
                  >
                    <h5 className="accordion-header" id="faq-4">
                      <button
                        className="accordion-button collapsed text-black"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-4"
                        aria-expanded="false"
                      >
                        <span className="text-primary me-4">4</span>
                        Your E-commerce Dream Come True in Minutes!
                      </button>
                    </h5>
                    <div
                      id="collapse-4"
                      className="accordion-collapse collapse text-black"
                      aria-labelledby="faq-4"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body text-black">
                        Celebrate the lightning-fast speed of Get.Grahak as your
                        e-commerce website and app are ready to rock in under
                        two minutes. Cheers to your online business success!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cyber-faq-img text-lg-center mt-5 mt-lg-0 0">
                <img
                  src="/CompareWhyUs/how-it-work.webp"
                  alt="cyber security"
                  className="img-fluid"
                  width={562}
                  height={450}
                />
              </div>
            </div>
            <div className="action-btns mtb-4 align-items-center mt-4 text-center">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWork;
