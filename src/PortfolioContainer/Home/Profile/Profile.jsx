import Typical from "react-typical";
import ScrollService from "../../../utils/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100008128277131">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/_sarmad.ah_/?hl=de">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCbeERm_hcKzShLDdMuBIhxQ">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/Sarmad20962116">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Sarmad</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical loop={Infinity} steps={["Aspiring Developer 🌱", 1000, "Front End Developer", 1000, "Software Expert", 1000]} />
              </h1>
              <span className="profile-role-tagline">Exploring the world of web development</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              Hire Me
            </button>
            <a href="CV Sarmad Ahmad.pdf" download="CV Sarmad Ahmad">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
