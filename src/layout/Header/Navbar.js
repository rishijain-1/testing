import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import dynamic from 'next/dynamic';

const Navbar = ({
  navDark,
  insurance,
  classOption,
  corporate,
  creativeAgencyOne,
  //marketplaceAgency,
  itCompany,
}) => {
  // console.log("corporate...", corporate);
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      <header
        className={`main-header z-10 ${
          creativeAgencyOne ? 'creative_agency_nav ' : ''
        }  ${itCompany ? 'it_company_nav ' : ''}     ${
          corporate ? 'header-35 position-absolute top-0 start-0 zindex-9' : ''
        }   ${navDark ? 'position-absolute ' : ''} w-100 ${classOption} ${
          insurance && 'ins-header main-header w-100 z-10 '
        }`}
      >
        <nav
          className={`navbar navbar-expand-xl z-50  ${
            corporate ? 'affix' : ''
          } ${navDark ? 'navbar-dark ' : 'navbar-light'} sticky-header ${
            scroll > headerTop ? 'affix' : ''
          }`}
        >
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <Link legacyBehavior href="/">
              <a>
                {scroll > headerTop || !navDark || itCompany ? (
                  <img
                    width={153}
                    height={36}
                    src="/home/i-am-still-alive-logo.svg"
                    alt="logo"
                    className="img-fluid logo-color"
                  />
                ) : (
                  <img
                    width={153}
                    height={36}
                    src="/home/i-am-still-alive-logo.svg"
                    alt="logo"
                    className="img-fluid logo-white"
                  />
                )}
              </a>
            </Link>
            <button
              className="navbar-toggler position-absolute right-0 border-0"
              id="#offcanvasWithBackdrop"
              role="button"
            >
              <span
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              >
                <HiMenu />
              </span>
            </button>
            <div className="clearfix"></div>
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li className="nav-item dropdown">
                  <Link legacyBehavior href="/" passHref>
                    <a className="nav-link" role="button">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/">
                    <a className="nav-link">Roadmap</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
              <Link legacyBehavior href="login">
                <a className="btn btn-link text-decoration-none me-2">Login</a>
              </Link>
              <Link legacyBehavior href="request-demo">
                <a
                  className={
                    insurance ? 'ins-btn ins-primary-btn' : 'btn btn-primary'
                  }
                >
                  Try it for FREE
                </a>
              </Link>
            </div>

            {/* <div
              className="offcanvas offcanvas-end d-xl-none"
              tabIndex="-1"
              id="offcanvasWithBackdrop"
            >
              <div className="offcanvas-header d-flex align-items-center mt-4">
                <Link legacyBehavior href="/">
                  <a className="d-flex align-items-center mb-md-0 text-decoration-none">
                    <img
                      width={121}
                      height={36}
                      src="/home/logo-color.png"
                      alt="logo"
                      className="img-fluid ps-2"
                    />
                  </a>
                </Link>
                <button
                  type="button"
                  className="close-btn text-danger"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <HiOutlineX />
                </button>
              </div>

              <OffCanvasMenu />
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
