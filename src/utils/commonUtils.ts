import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";
import Home from "../PortfolioContainer/Home/Home";
import Resume from "../PortfolioContainer/Resume/Resume";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";

export const TOTAL_SCREENS = [
  { screen_name: "Home", component: Home, alreadyRendered: true },
  { screen_name: "AboutMe", component: AboutMe, alreadyRendered: false },
  { screen_name: "Resume", component: Resume, alreadyRendered: false },
  { screen_name: "Testimonial", component: Testimonial, alreadyRendered: false },
  { screen_name: "ContactMe", component: ContactMe, alreadyRendered: false },
];

export const GET_SCREEN_INDEX = (screen_name: any) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
