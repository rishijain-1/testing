// import React, { useState } from 'react';

// const faqItems = [
//   {
//     id: 'faq-1',
//     question: 'Does Churn Buster charge a fee for recovered payments?',
//     answer:
//       'When the lead is ready to meet, our appointment setter suggests them free slots from your calendar and sets up the meeting. Before the call itself, we ping the lead to confirm the appointment. If they still haven’t showed up, we follow up on them and offer to reschedule, until they are available to meet.',
//   },
//   {
//     id: 'faq-2',
//     question: 'How does this compare to Recharge built-in features?',
//     answer:
//       'When the lead is ready to meet, our appointment setter suggests them free slots from your calendar and sets up the meeting. Before the call itself, we ping the lead to confirm the appointment. If they still haven’t showed up, we follow up on them and offer to reschedule, until they are available to meet.',
//   },
//   {
//     id: 'faq-3',
//     question: 'What’s setup like? Do I have time for this?',
//     answer:
//       'When the lead is ready to meet, our appointment setter suggests them free slots from your calendar and sets up the meeting. Before the call itself, we ping the lead to confirm the appointment. If they still haven’t showed up, we follow up on them and offer to reschedule, until they are available to meet.',
//   },
//   // Add the rest of the FAQ items here
// ];

const FaqSection = () => {
  return (
    <div className="section-space bgc-white">
      <div className="section-space--sm-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h3 className="heading-3 clr-black text-center">
                Frequently Asked{' '}
                <span className="clr-red ail-highlighted-text">Questions</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 gy-5">
          <div className="col-lg-6 col-xl-7">
            <span className="d-inline-block font-weight-semibold padding-y-1 padding-x-8 rounded-2 margin-bottom-8 bgc-dark-2 clr-white fs-14 text-center">
              FAQ
            </span>
            <div className="faq-list-group list-group gap-5">
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text :bgc-white active"
                data-bs-toggle="list"
                href="#faq-1"
              >
                How to Set Up Your Digital Legacy with IAmStillAlive?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text :bgc-black"
                data-bs-toggle="list"
                href="#faq-2"
              >
                Understanding End-to-End Encryption at IAmStillAlive?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-3"
              >
                How to Store and Manage Instructions in IAmStillAlive?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-4"
              >
                What Happens If I Stop Responding to Wellness Checker
                Notifications?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-5"
              >
                Can I Customize My Notifications?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-6"
              >
                Can I Share Specific Instructions and Information Only with
                Selected Loved Ones?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-7"
              >
                Can I Change or Update My Data Later?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-8"
              >
                What Happens If I Pass Away and No Longer Make Payments? Will My
                Loved Ones Still Have Access?
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            <span className="d-inline-block font-weight-semibold padding-y-1 padding-x-8 rounded-2 margin-bottom-8 bgc-danger clr-white fs-14 text-center">
              Ans
            </span>
            <div class="tab-content text-black">
              <div class="tab-pane fade active show" id="faq-1" role="tabpanel">
                <div class="border border-blue-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p class="fs-18">
                    Log in to your IAmStillAlive account and navigate to your
                    dashboard.
                  </p>
                  <p class="fs-18">
                    From there, you can easily add your accounts, assets, and
                    instructions. Customize your notification settings and
                    wellness checker schedule to fit your needs.
                  </p>
                  <p class="fs-18">
                    Follow the step-by-step prompts to ensure your digital
                    legacy is securely organized and managed.
                  </p>
                </div>
              </div>
              <div class="tab-pane fade" id="faq-2" role="tabpanel">
                <div class="border border-blue-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p class="fs-18">
                    End-to-end encryption ensures that your data is fully
                    protected at all times.
                  </p>
                  <p class="fs-18">
                    When you store or transmit information on IAmStillAlive, it
                    is encrypted using advanced algorithms, making it unreadable
                    to anyone except you and your designated trusted
                    individuals.
                  </p>
                  <p class="fs-18">
                    This means that even if someone intercepts your data, they
                    won’t be able to access or decipher it without the proper
                    decryption key.
                  </p>
                  <p class="fs-18 mb-0">
                    Only authorized users, with whom you share access, can
                    decrypt and view your information. This robust security
                    measure guarantees that your digital legacy remains
                    confidential and secure, safeguarding it from unauthorized
                    access or breaches.
                  </p>
                </div>
              </div>
              <div class="tab-pane fade" id="faq-3" role="tabpanel">
                <div class="border border-blue-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p class="fs-18">
                    To store and manage instructions in IAmStillAlive, simply
                    log in to your account and navigate to the
                    &quot;Instructions&quot; section on your dashboard.
                  </p>
                  <p class="fs-18">
                    Here, you can create detailed instructions outlining how
                    your loved ones should access and manage your digital assets
                    and information. Our advanced AI technology assists you in
                    crafting clear and comprehensive instructions, ensuring that
                    they are easily understandable and actionable.
                  </p>
                  <p class="fs-18">
                    You can specify various scenarios and provide step-by-step
                    guidance for accessing different types of data, such as
                    financial accounts, digital documents, or important personal
                    information.
                  </p>
                  <p class="fs-18 mb-0">
                    This feature ensures that your family members are
                    well-prepared and informed, making it easier for them to
                    handle your digital legacy according to your wishes.
                  </p>
                </div>
              </div>
              <div class="tab-pane fade" id="faq-4" role="tabpanel">
                <div class="border border-blue-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p class="fs-18">
                    If you stop responding to notifications from IAmStillAlive,
                    our system has built-in safeguards to ensure your loved ones
                    are informed.
                  </p>
                  <p class="fs-18">
                    Our platform is designed to automatically send notifications
                    to your designated family members or contacts if there is a
                    lack of response from you.
                  </p>
                  <p class="fs-18">
                    This feature ensures that your loved ones are promptly
                    alerted in case of an emergency or if your well-being status
                    changes.
                  </p>
                  <p class="fs-18 mb-0">
                    By keeping your designated contacts updated, IAmStillAlive
                    helps ensure that important information about your digital
                    assets and legacy is communicated effectively, even in
                    challenging circumstances.
                  </p>
                </div>
              </div>
              <div class="tab-pane fade" id="faq-5" role="tabpanel">
                <div class="border border-blue-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p class="fs-18">
                    Absolutely! IAmStillAlive offers comprehensive customization
                    options for notifications.
                  </p>
                  <p class="fs-18">
                    You can tailor the settings to specify when and under what
                    conditions notifications should be sent.
                  </p>
                  <p class="fs-18">
                    Whether you prefer immediate alerts or scheduled updates,
                    you can adjust the notification frequency and triggers based
                    on your needs.
                  </p>
                  <p class="fs-18 mb-0">
                    Additionally, you can set up different types of
                    notifications for various scenarios, ensuring that both you
                    and your loved ones receive timely and relevant information.
                    This level of customization helps you stay informed in the
                    way that best suits your personal preferences and
                    circumstances.
                  </p>
                </div>
              </div>
              <div class="tab-pane fade" id="faq-6" role="tabpanel">
                <div class="border border-blue-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p class="fs-18">
                    Yes, IAmStillAlive allows you to customize and share
                    specific instructions and information with selected
                    individuals or groups.
                  </p>
                  <p class="fs-18">
                    You have full control over who receives access to different
                    pieces of information. By assigning instructions to specific
                    loved ones, you can ensure that only authorized individuals
                    are privy to sensitive details or critical information.
                  </p>
                  <p class="fs-18">
                    This feature provides enhanced privacy and security,
                    ensuring that each person receives the information relevant
                    to their role, while maintaining overall control and
                    confidentiality of your digital legacy.
                  </p>
                </div>
              </div>
              <div class="tab-pane fade" id="faq-7" role="tabpanel">
                <div class="border border-blue-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p class="fs-18">
                    Absolutely. With IAmStillAlive, you have the flexibility to
                    edit or update your data at any time through your dashboard.
                  </p>
                  <p class="fs-18">
                    Whether you need to revise asset details, update
                    instructions, or make any other changes, you can easily do
                    so to ensure that your digital legacy remains current and
                    accurate.
                  </p>
                  <p class="fs-18">
                    Keeping your information up-to-date is crucial for
                    maintaining the relevance and effectiveness of your legacy
                    planning, and our platform is designed to make this process
                    as straightforward and hassle-free as possible.
                  </p>
                </div>
              </div>
              <div class="tab-pane fade" id="faq-8" role="tabpanel">
                <div class="border border-blue-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p class="fs-18">
                    Yes, your loved ones will still have access. Our service is
                    designed to ensure that your digital legacy remains
                    protected and accessible, even if you are no longer able to
                    make payments.
                  </p>
                  <p class="fs-18">
                    The wellness checker and notification system will continue
                    to function for a lifetime, regardless of your payment
                    status.
                  </p>
                  <p class="fs-18">Here&apos;s how it works:</p>
                  <ul class="ail-tab-con_list list-unstyled">
                    <li class="d-flex align-items-center gap-3">
                      <span>
                        <i
                          class="fa-solid fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <p class="text-black mb-0">
                        <strong>Active Plan:</strong> While your plan is active,
                        you can continuously manage and update your assets,
                        instructions, and heirs. This ensures that all
                        information is current and accurate.
                      </p>
                    </li>
                    <li class="d-flex align-items-center gap-3">
                      <span>
                        <i
                          class="fa-solid fa-chevron-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <p class="text-black mb-0">
                        <strong>Expired Plan:</strong> If your plan expires, the
                        wellness checker and notification system will still
                        operate, ensuring that your designated loved ones are
                        informed in case of an emergency.
                      </p>
                    </li>
                  </ul>
                  <p class="fs-18 mb-0">
                    Our goal is to provide peace of mind by ensuring that your
                    digital legacy is preserved and your family is taken care
                    of, even if you are no longer able to actively manage your
                    account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
