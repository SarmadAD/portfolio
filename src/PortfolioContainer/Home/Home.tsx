import Footer from "./Footer/Footer";
import Profile from "../Home/Profile/Profile";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
    </div>
  );
}
