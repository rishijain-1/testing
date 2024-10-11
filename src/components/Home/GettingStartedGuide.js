import Link from 'next/link';

const GettingStartedGuide = () => {
  return (
    <>
      <section className="hd-htw-section ptb-120 position-relative overflow-hidden z-1">
        <div className="container">
          <div className="row align-items-center g-5 justify-content-center">
            <div className="col-lg-6">
              <div className="hd-description text-center text-lg-end hd-border-right position-relative">
                <p>
                  Getting started with IAmStillAlive is quick and easy. In just
                  three simple steps, you can secure your digital legacy and
                  protect your loved ones. Whether you&apos;re organizing your
                  assets or ensuring a smooth handover, our platform makes the
                  process effortless. Follow the steps below and experience
                  peace of mind, knowing your family is covered.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="hd-title text-center text-lg-start">
                <h2 className="clr-text">
                  Start with{' '}
                  <span class="ail-highlighted-text"> IAmStillAlive </span>
                  in <br />
                  <mark className="bg-transparent p-0 position-relative ms-1">
                    1, 2, 3{' '}
                    <img
                      src="/home/arrow-rounded.png"
                      alt=""
                      className="arrow-rounded position-absolute"
                    />
                  </mark>{' '}
                  &nbsp;&nbsp;&nbsp;&nbsp; Simple Steps!
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="row justify-content-center g-4">
              <div className="col-xl-4 col-lg-6">
                <div className="htw-single-box bg-white position-relative py-5 px-4 rounded z-1">
                  <span className="number-serial position-absolute">1</span>
                  <span class="icon-wrapper">
                    <img
                      src="/home/GettingStartedGuide/icons/signup-for-free-gradient.svg"
                      alt=""
                      height="56"
                      width="56"
                    />
                  </span>
                  <h4 className="mt-3 mb-3">Sign Up for FREE</h4>
                  <p className="mb-4">
                    Create your IAmStillAlive account in minutes—no cost
                    involved. Start building a secure digital space for your
                    important information.
                  </p>
                  <Link href="/register" className="read-more-link">
                    Free sign up{' '}
                    <i className="fa-solid fa-arrow-right-long ms-1"></i>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="htw-single-box bg-white position-relative py-5 px-4 rounded z-1 mts-50">
                  <span className="number-serial position-absolute">2</span>
                  <span className="icon-wrapper">
                    <img
                      src="/home/GettingStartedGuide/icons/upload-assets.svg"
                      alt=""
                      height="56"
                      width="56"
                    />
                  </span>
                  <h4 className="mt-3 mb-3">
                    Upload Asset Details & Assign Heirs
                  </h4>
                  <p className="mb-4">
                    Add details about your investments, insurance, and other
                    assets. Attach a trusted heir to ensure your loved ones have
                    access when they need it.
                  </p>
                  <Link href="/register" className="read-more-link">
                    Free sign up{' '}
                    <i className="fa-solid fa-arrow-right-long ms-1"></i>
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="htw-single-box bg-white position-relative py-5 px-4 rounded z-1 mts-100">
                  <span className="number-serial position-absolute">3</span>
                  <span className="icon-wrapper">
                    <img
                      src="/home/GettingStartedGuide/icons/all-round-support.svg"
                      alt=""
                      height="56"
                      width="56"
                    />
                  </span>
                  <h4 className="mt-3 mb-3">Leave the Rest to Us</h4>
                  <p className="mb-4">
                    Once everything is set up, our platform takes care of the
                    rest. From secure storage to timely notifications, you can
                    trust us to manage your digital legacy.
                  </p>
                  <Link href="/register" className="read-more-link">
                    Free sign up{' '}
                    <i className="fa-solid fa-arrow-right-long ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/home/arrow-multiple.png"
          alt="arrow"
          className="arrow-multiple position-absolute z--1"
        />
      </section>
    </>
  );
};

export default GettingStartedGuide;
