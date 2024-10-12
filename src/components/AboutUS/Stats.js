import Link from 'next/link';
const accordionDataTwo = [
  {
    id: '2',
    title: 'Orders Processed',
    content: '3330+',
  },
  {
    id: '3',
    title: 'Entrepreneurial Success Stories',
    content: '183+',
  },
  {
    id: '4',
    title: 'IT help desk for internal teams',
    content: '183+',
  },
];
const accordionDataThree = [
  {
    id: '5',
    title: 'How Does we Work?',
    content: '183+',
  },
  {
    id: '6',
    title: 'How long does a project last?',
    content: '183+',
  },
  {
    id: '7',
    title: 'IT help desk for internal teams',
    content: '183+',
  },
];
const Stats = () => {
 
  return (
    <>
      <div className="it-company-faq-area position-relative overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="accordion ca-accordion"
                id="technologicalQuery"
              ></div>
            </div>
            <div className="col-lg-4 ">
              <div className="accordion ca-accordion " id="technologicalQuery">
                {accordionDataTwo.map((item) => (
                  <div className="accordion-item " key={item.id}>
                    <h2 className="accordion-header">
                      <div
                        className={`accordion-button bg-black text-white d-flex align-items-center  justify-content-between `}
                        type=""
                      >
                        <div className="p-2">{item.title}</div>

                        <span className="h2 text-white main-text-value">
                          {item.content}
                        </span>
                      </div>
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="accordion ca-accordion" id="technologicalQuery">
                {accordionDataThree.map((item) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                      <div
                        className={`accordion-button text-white bg-black d-flex align-items-center  justify-content-between`}
                        type=""
                      >
                        <div className="p-2">{item.title}</div>

                        <span className="h2 text-white main-text-value">
                          {item.content}
                        </span>
                      </div>
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="accordion ca-accordion"
                id="technologicalQuery"
              ></div>
            </div>
            <div className="col-lg-8">
              <div className="accordion ca-accordion" id="technologicalQuery">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <div
                      className="accordion-button text-white bg-black  border-black align-items-center  justify-content-between"
                      type=""
                    >
                      <div className="p-2">Global Presence</div>

                      <span className="h2 text-white main-text-value">
                        10+ Countries
                      </span>
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="accordion ca-accordion"
                id="technologicalQuery"
              ></div>
            </div>
            <div className="col-lg-8 pt-2">
              <div className="ail-info-card-area1">
                <div className="p-1">
                  <div className="ail-info-card-text">
                    Empowering SMEs with All-in-One E-Commerce Solutions: Your
                    Path to Online Success with GetGrahak
                  </div>
                  <div className="pt-3">
                    <Link href="#" className="trail-btn">
                      Get free trail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
