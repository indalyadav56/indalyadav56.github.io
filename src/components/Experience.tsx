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
    <div id="experience">
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-center my-8 lg:my-12">
        Experience
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - present"
          contentStyle={{ background: "rgb(156, 85, 18)", color: "#fff" }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#c9bebe" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Mumbai, IN</h4>
          <p>
            Software engineer with expertise in Python (Django), Golang,
            Javascript (Typescript, React, Next.js), NoSQL & SQL, and cloud
            platforms (AWS). Adept at building robust and scalable applications.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(141, 17, 65)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019 - 2021"
          iconStyle={{ background: "rgb(153, 42, 97)", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle font-medium">
            Mumbai, IN
          </h4>
          <p>
            Full-stack engineer building web applications. Proficient in Python,
            Django (backend), JavaScript, and React (frontend). Handles the
            entire development lifecycle, from design to deployment.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
