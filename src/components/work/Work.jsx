import React from "react";
import "./Work.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BiRightArrow } from "react-icons/bi";

const Work = () => {
  return (
    <div className="container work-wrapper">
      <div className="heading">
        <h4>Where I've Worked</h4>
      </div>
      <div className="div-tabs">
        <Tabs className="my-tabs text-left">
          <TabList>
            <Tab>
              <p>Title 1</p>
            </Tab>
            <Tab>
              <p>Title 2</p>
            </Tab>
            <Tab>
              <p>Title 3</p>
            </Tab>
            <Tab>
              <p>Title 4</p>
            </Tab>
            <Tab>
              <p>Title 5</p>
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
                  <ol>
                    <li>
                      <BiRightArrow />
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatem, fugit ullam voluptas officiis quidem delectus
                    </li>
                  </ol>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>Any content 2</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>Any content 3</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>Any content 4</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="panel-content">
                <h2>Any content 5</h2>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Work;
