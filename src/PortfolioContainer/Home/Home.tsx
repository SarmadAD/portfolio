import Footer from "./Footer/Footer";
import Profile from "../Home/Profile/Profile";
import "./Home.css";
import Header from "./Header/Header";

interface Props {
  id: any;
}

export default function Home({ id }: Props) {
  return (
    <div className="home-container" id={id || ""}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
