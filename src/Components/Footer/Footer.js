import video from "../../Assets/Vids/vid1.mp4";

import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} muted loop autoPlay itemType="video/mp4" />
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div data-aos="fade-up" className="inputDiv flex">
            <input type="text" placeholder="Enter E-mail" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv flex">
              <a href="#" className="logo">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
              ab, aspernatur magni exercitationem expedita voluptatem ipsam
              nihil sint? Fugiat nihil recusandae earum maiores blanditiis
              molestias, consequuntur illo natus totam voluptatem.
            </div>

            <div data-aos="fade-up" className="footerSocial flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos="fade-up" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Service
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            <div data-aos="fade-up" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Service
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            <div data-aos="fade-up" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Service
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>best travel website theme</small>
            <small>copyrights reversed - 999</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
