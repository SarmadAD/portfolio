import { useState } from "react";
import Animations from "../../utils/Animations";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";

interface Props {
  id: any;
}

export default function Resume({ id }: Props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props: any) => (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? <div className="heading-date">{props.fromDate + "_" + props.toDate}</div> : <div></div>}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>
  );

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "C#", ratingPercentage: 60 },
    { skill: "React", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "SQL", ratingPercentage: 60 },
    { skill: "Blazor", ratingPercentage: 80 },
    { skill: "Figma", ratingPercentage: 80 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Beschreibung hier",
      subHeading: "Technologien hier rein und kleinere infos",
    },
    {
      title: "Project 2",
      duration: { fromDate: "2019", toDate: "2021" },
      description: "Beschreibung hier",
      subHeading: "Technologien hier rein und kleinere infos",
    },
    {
      title: "Project 3",
      duration: { fromDate: "2018", toDate: "2021" },
      description: "Beschreibung hier",
      subHeading: "Technologien hier rein und kleinere infos",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading heading="Schule Stadt" subHeading="Abschluss" fromDate="2010" toDate="2014" />
      <ResumeHeading heading="Schule Stadt" subHeading="Abschluss" fromDate="2010" toDate="2014" />
      <ResumeHeading heading="Schule Stadt" subHeading="Abschluss" fromDate="2010" toDate="2014" />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading heading="Arbeit name" subHeading="Beruf" fromDate="2010" toDate="2014" />
      <ResumeHeading heading="Arbeit name" subHeading="Beruf" fromDate="2010" toDate="2014" />
      <ResumeHeading heading="Arbeit name" subHeading="Beruf" fromDate="2010" toDate="2014" />
      <div className="experience-decription">
        <span className="resume-description-text">Beschreibung</span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">SubBeschreibung1</span>
        <br />
        <span className="resume-description-text">SubBeschreibung2</span>
        <br />
        <span className="resume-description-text">SubBeschreibung3</span>
      </div>
      ,
      <div className="resume-screen-container programming-skills-container" key="programming-skills">
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentace">
              <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage"></div>
            </div>
          </div>
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading heading="InterssenTitle" description="Intreressen Beschreibung" />
        <ResumeHeading heading="InterssenTitle" description="Intreressen Beschreibung" />
        <ResumeHeading heading="InterssenTitle" description="Intreressen Beschreibung" />
      </div>
    </div>,
  ];

  const resumeBullets = [
    { label: "Education", logSrc: "education.svg" },
    { label: "Work History", logSrc: "work-history.svg" },
    { label: "Programming Skills", logSrc: "programming-skills.svg" },
    { label: "Projects", logSrc: "projects.svg" },
    { label: "Interests", logSrc: "interests.svg" },
  ];

  let fadeInScreenHandler = (screen: any) => {
    if (screen.fadeScreen !== id) return;
    Animations.animations.fadeInScreen(id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="resume-container screen-container" id={id || ""}>
      <div className="resume-content">
        <ScreenHeading title="Resume" subHeading="My Formal Bio Details" />
      </div>
    </div>
  );
}
