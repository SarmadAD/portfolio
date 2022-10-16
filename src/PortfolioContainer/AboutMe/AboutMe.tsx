import Animations from "../../utils/Animations";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import "./AboutMe.css";

interface Props {
  id: any;
}

export default function AboutMe({ id }: Props) {
  let fadeInScreenHandler = (screen: any) => {
    if (screen.fadeInScreen !== id) return;
    Animations.animations.fadeInScreen(id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANT = {
    description:
      "Bis zu meinem Abschluss als Anwendungsentwickler im Juli 2021 konnte ich mir viele Kenntnisse und Erfahrungen aneignen. Ich lernte viel über die C# Entwicklung, Datenbankentwicklung und das Arbeiten im Team zum Beispiel durch Scrum. Im Bereich der Webentwicklung konnte ich mir neue Kenntnisse durch das Absolvieren eines Bootcamps aneignen.",
    highlights: {
      bullets: ["Front End Development", "React", "C# Development", "Building REST API"],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlights = () => {
    return SCREEN_CONSTANT.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container fade-in" id={id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title="About Me" subHeading="Why Choose Me?" />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">{SCREEN_CONSTANT.description}</span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANT.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                Hire Me
              </button>
              <a href="CV Sarmad Ahmad.pdf" download="CV Sarmad Ahmad">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
