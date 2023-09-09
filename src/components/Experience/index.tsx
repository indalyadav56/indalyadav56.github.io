"use clien";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <div id="Experience" className="Experience">
      <h1 className="lg:text-5xl md:text-4xl text-3xl text-center my-8 lg:my-12">
        Experience
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Mumbai, IN</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - present"
          contentStyle={{ background: "rgb(101, 115, 241)", color: "#fff" }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#c9bebe" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Mumbai, IN</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
