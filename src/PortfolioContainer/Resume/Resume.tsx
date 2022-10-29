import { useState } from "react";
import Animations from "../../utils/Animations";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import "./Resume.css";

interface Props {
  id: any;
}

export default function Resume({ id }: Props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState<any>({});

  let fadeInScreenHandler = (screen: any) => {
    if (screen.fadeInScreen !== id) return;
    Animations.animations.fadeInScreen(id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props: any) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? <div className="heading-date">{props.fromDate + "-" + props.toDate}</div> : <div></div>}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
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
      duration: { fromDate: "2022", toDate: "2022" },
      description: "Eine Portfolio Website",
      subHeading: "JavaScript, React, HTML CSS, TypeScript",
    },
    {
      title: "Blog",
      duration: { fromDate: "2021", toDate: "2022" },
      description: "Eigene Blog Website mit Anmeldung und Benutzerverwaltung",
      subHeading: "C#, HTML, CSS, Blazor, SQL, SQL-Server",
    },
    {
      title: "Game of Life",
      duration: { fromDate: "2019", toDate: "2020" },
      description: "Das Game Of Life in einfacher Version programmiert",
      subHeading: "C#, HTML, CSS, Blazor",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading heading="Berufskolleg für Technik" subHeading="Fachhochschulreife" fromDate="2010" toDate="2014" />
      <ResumeHeading heading="Annete von droste hülshof schule" subHeading="Fachoberschulreife" fromDate="2010" toDate="2014" />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading heading="Praktikum" subHeading="Softwareentwickler" fromDate="2010" toDate="2014" />
        <div className="experience-description">
          <span className="resume-description-text">Allgemine Entwicklung</span>
        </div>
        <ResumeHeading heading="Ausbildung" subHeading="Fachinformatiker für die Anwendungsentwicklung" fromDate="2010" toDate="2014" />
        <div className="experience-description">
          <ul>
            <li>
              <span className="resume-description-text">Desktop Development with C#</span>
            </li>
            <li>
              <span className="resume-description-text">Database Development with SQL-Server</span>
            </li>
            <li>
              <span className="resume-description-text">Web Development with HTML, CSS and Blazor</span>
            </li>
          </ul>
        </div>
      </div>
    </div>,
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage-bar"></div>
          </div>
        </div>
      ))}
    </div>,
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
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="InterssenTitle" description="Intreressen Beschreibung" />
      <ResumeHeading heading="InterssenTitle" description="Intreressen Beschreibung" />
      <ResumeHeading heading="InterssenTitle" description="Intreressen Beschreibung" />
    </div>,
  ];

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const handleCarousal = (index: any) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div onClick={() => handleCarousal(index)} className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"} key={index}>
        <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt="no connection" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div style={carousalOffSetStyle.style} className="resume-details-carousal">
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container fade-in" id={id || ""}>
      <div className="resume-content">
        <ScreenHeading title="Resume" subHeading="My Formal Bio Details" />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
