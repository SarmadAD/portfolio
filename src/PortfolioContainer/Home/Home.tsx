import Footer from "./Footer/Footer";
import Profile from "../Home/Profile/Profile";
import "./Home.css";
import Header from "./Header/Header";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
