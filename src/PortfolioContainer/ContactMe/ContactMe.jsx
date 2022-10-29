import React, { useState } from "react";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import Animations from "../../utils/Animations";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Typical from "react-typical";
import "./ContactMe.css";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";

export default function ContactMe({ id }) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== id) return;
    Animations.animations.fadeInScreen(id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  async function submitForm(event) {
    event.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const result = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(result.data.msg);
        toast.error(result.data.msg);
        setBool(false);
      } else if (result.status === 200) {
        setBanner(result.data.msg);
        toast.success(result.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-container fade-in" id={id || ""}>
      <ScreenHeading subHeading="Lets Keep In Touch" title="Contact Me" />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch", 1000]} />
          </h2>
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />
            <label htmlFor="email">E-Mail</label>
            <input type="email" onChange={handleEmail} value={email} />
            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />
            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
