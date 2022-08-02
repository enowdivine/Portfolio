import React from "react";
import "./Work.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BiRightArrow } from "react-icons/bi";

const Work = () => {
  return (
    <div className="work-wrapper">
      <div className="heading">
        <span>02. </span>
        <h5>Where I've Worked</h5>
      </div>
      <div className="div-tabs">
        <Tabs className="my-tabs text-left">
          <TabList>
            <Tab>
              <p>Summit Tech</p>
            </Tab>
            <Tab>
              <p>Bridge Africa</p>
            </Tab>
            <Tab>
              <p>Zotech</p>
            </Tab>
            <Tab>
              <p>Nervtek</p>
            </Tab>
          </TabList>

          <div>
            <TabPanel className="work-details">
              <div className="panel-content">
                <p className="work-place">
                  Full Stack Developer{" "}
                  <span className="company">
                    @ <a href="https://summittech-eng.org/">Summit Tech</a>
                  </span>
                </p>
                <span className="work-period">July - Dec 2021</span>
                <div>
                  <div className="specific-details mt-3">
                    <span>
                      {" "}
                      <BiRightArrow size={15} color="#64ffda" />
                    </span>
                    <p className="ml-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem, fugit ullam voluptas officiis quidem delectus
                    </p>
                  </div>
                  <div className="specific-details mt-3">
                    <span>
                      {" "}
                      <BiRightArrow size={15} color="#64ffda" />
                    </span>
                    <p className="ml-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem, fugit ullam voluptas officiis quidem delectus
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="work-details">
              <div className="panel-content">
                <p className="work-place">
                  Full Stack Developer{" "}
                  <span className="company">
                    @ <a href="https://summittech-eng.org/">Summit Tech</a>
                  </span>
                </p>
                <span className="work-period">July - Dec 2021</span>
                <div>
                  <div className="specific-details mt-3">
                    <span>
                      {" "}
                      <BiRightArrow size={15} color="#64ffda" />
                    </span>
                    <p className="ml-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem, fugit ullam voluptas officiis quidem delectus
                    </p>
                  </div>
                  <div className="specific-details mt-3">
                    <span>
                      {" "}
                      <BiRightArrow size={15} color="#64ffda" />
                    </span>
                    <p className="ml-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem, fugit ullam voluptas officiis quidem delectus
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="work-details">
              <div className="panel-content">
                <p className="work-place">
                  Full Stack Developer{" "}
                  <span className="company">
                    @ <a href="https://summittech-eng.org/">Summit Tech</a>
                  </span>
                </p>
                <span className="work-period">July - Dec 2021</span>
                <div>
                  <div className="specific-details mt-3">
                    <span>
                      {" "}
                      <BiRightArrow size={15} color="#64ffda" />
                    </span>
                    <p className="ml-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem, fugit ullam voluptas officiis quidem delectus
                    </p>
                  </div>
                  <div className="specific-details mt-3">
                    <span>
                      {" "}
                      <BiRightArrow size={15} color="#64ffda" />
                    </span>
                    <p className="ml-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem, fugit ullam voluptas officiis quidem delectus
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="work-details">
              <div className="panel-content">
                <p className="work-place">
                  Full Stack Developer{" "}
                  <span className="company">
                    @ <a href="https://summittech-eng.org/">Summit Tech</a>
                  </span>
                </p>
                <span className="work-period">July - Dec 2021</span>
                <div>
                  <div className="specific-details mt-3">
                    <span>
                      {" "}
                      <BiRightArrow size={15} color="#64ffda" />
                    </span>
                    <p className="ml-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem, fugit ullam voluptas officiis quidem delectus
                    </p>
                  </div>
                  <div className="specific-details mt-3">
                    <span>
                      {" "}
                      <BiRightArrow size={15} color="#64ffda" />
                    </span>
                    <p className="ml-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem, fugit ullam voluptas officiis quidem delectus
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="work-details">
              <div className="panel-content">
                <p className="work-place">
                  Full Stack Developer{" "}
                  <span className="company">
                    @ <a href="https://summittech-eng.org/">Summit Tech</a>
                  </span>
                </p>
                <span className="work-period">July - Dec 2021</span>
                <div>
                  <div className="specific-details mt-3">
                    <span>
                      {" "}
                      <BiRightArrow size={15} color="#64ffda" />
                    </span>
                    <p className="ml-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem, fugit ullam voluptas officiis quidem delectus
                    </p>
                  </div>
                  <div className="specific-details mt-3">
                    <span>
                      {" "}
                      <BiRightArrow size={15} color="#64ffda" />
                    </span>
                    <p className="ml-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem, fugit ullam voluptas officiis quidem delectus
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Work;
