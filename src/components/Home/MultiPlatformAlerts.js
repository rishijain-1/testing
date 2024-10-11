// import { FaPlus } from 'react-icons/fa6';
// import { FaMinus } from 'react-icons/fa';
//import { useState } from 'react';

const MultiPlatformAlerts = () => {
  // State to manage which accordion item is active
  // const [activeItemId, setActiveItemId] = useState('hd_acc1');

  // // Data for the accordion items
  // const accordionItems = [
  //   {
  //     id: 'hd_acc1',
  //     title: 'Feedback Requests',
  //     content:
  //       'Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.',
  //   },
  //   {
  //     id: 'hd_acc2',
  //     title: 'HelpDesk Analytics',
  //     content:
  //       'Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.',
  //   },
  //   {
  //     id: 'hd_acc3',
  //     title: 'Ticket Tagging',
  //     content:
  //       'Globally whiteboard global web-readiness rather than holistic action items. Uniquely communicate synergistic markets.',
  //   },
  // ];

  // // Handle click event to toggle active accordion item
  // const handleToggle = (id) => {
  //   setActiveItemId((prevId) => (prevId === id ? null : id));
  // };
  return (
    <>
      <section className="hd-support-section ptb-80 overflow-hidden">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="hd-support-img">
                <img
                  src="/home/GettingStartedGuide/multi-platform-notification-system.svg"
                  alt="support"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6  order-1 order-lg-2">
              <div className="hd-support-content">
                <div className="hd-title">
                  <h2 className="mb-30 clr-text">
                    <mark class="bg-transparent p-0 position-relative ail-highlighted-text">
                      Multi-Platform
                      <img
                        src="/home/line-shape.png"
                        alt="arrow"
                        class="position-absolute line-shape"
                      />
                    </mark>{' '}
                    Support for Notifications & Wellness Checks
                  </h2>
                  <p class="mb-0">
                    We use{' '}
                    <strong>WhatsApp, Email, Text Messages, Telegram,</strong>{' '}
                    and <strong>Bot Calls</strong> to deliver important
                    notifications to your family or heirs. Whether it’s to check
                    on your well-being or send vital updates, our platform makes
                    sure no message is missed, keeping everyone connected when
                    it matters most.
                  </p>
                </div>
                <div className="hd-support-box-wrapper mt-5 d-flex align-items-center flex-wrap">
                  <div className="hd-support-box rounded d-inline-flex align-items-center flex-shrink-0 bg-white">
                    <span className="icon-wrapper">
                      <i className="fa-regular fa-envelope"></i>
                    </span>
                    <p className="mb-0 ms-3">Email</p>
                  </div>
                  <div className="hd-support-box rounded d-inline-flex align-items-center flex-shrink-0 bg-white">
                    <span className="icon-wrapper">
                      <i className="fa-brands fa-whatsapp"></i>
                    </span>
                    <p className="mb-0 ms-3">WhatsApp</p>
                  </div>
                  <div className="hd-support-box rounded d-inline-flex align-items-center flex-shrink-0 bg-white">
                    <span className="icon-wrapper">
                      <i className="fa-solid fa-comment-sms"></i>
                    </span>
                    <p className="mb-0 ms-3">Text Messages</p>
                  </div>
                  <div className="hd-support-box rounded d-inline-flex align-items-center flex-shrink-0 bg-white">
                    <span className="icon-wrapper">
                      <i className="fa-brands fa-telegram"></i>
                    </span>
                    <p className="mb-0 ms-3">Telegram</p>
                  </div>
                  <div className="hd-support-box rounded d-inline-flex align-items-center flex-shrink-0 bg-white">
                    <span className="icon-wrapper">
                      <i className="fa-solid fa-robot"></i>
                    </span>
                    <p className="mb-0 ms-3">Bot Calls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MultiPlatformAlerts;
