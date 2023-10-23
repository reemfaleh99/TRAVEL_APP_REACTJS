import video from "../../Assets/Vids/vid1.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <video src={video} muted loop autoPlay itemType="video/mp4" />
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up"></span>
          <span className="smallText">Our Packages</span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holiday
          </h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination: </label>
            <div className="input flex">
              <input type="text" placeholder="Enter" />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput ">
            <label htmlFor="date">Select your date: </label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput ">
            <div className="label_total flex">
              <label htmlFor="price">Max price: </label>
              <h3 className="total">$50000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="50000" min="1000" />
            </div>
          </div>

          <div className="sreachOption flex">
            <HiFilter className="icon" />
            <span>MORE FILTER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
