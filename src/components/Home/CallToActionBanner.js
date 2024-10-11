import Link from 'next/link';

const CallToActionBanner = () => {
  return (
    <>
      <div className="ail-cta-area pb-120">
        <div className="container">
          <div className="ail-cta-wrapper p-5 rounded-16 position-relative z-1">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h2 className="ail-title text-black fs-48 fw-600">
                  Building a Better Future for your{' '}
                  <span className="ail-highlighted-text">Loved Ones!</span>
                </h2>
                <Link
                  href="/"
                  className="btn ail-gd-bg dark-bg-hover rounded-5 text-white fs-16 border-0 mt-20"
                >
                  Register For Free
                </Link>
              </div>
              <div className="col-lg-6">
                <img src="/home/cta.png" alt="" className="w-100 img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToActionBanner;
