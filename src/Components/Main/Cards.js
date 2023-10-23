import { HiOutlineClipboard, HiOutlineLocationMarker } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Cards = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="secContent grid">
      {data.map((d) => {
        return (
          <div data-aos="fade-up" className="singleDest" key={d.id}>
            <div className="cardInfo">
              <h4 className="destTitle">{d.destTitle}</h4>
              <span className="flex containerr">
                <HiOutlineLocationMarker className="icon" />
                <span className="name">{d.location}</span>
              </span>
            </div>
            <div className="fees flex">
              <div className="grade">
                {d.grade}
                <small>+1</small>
              </div>
              <div className="price">
                <h5>{d.fees}</h5>
              </div>
            </div>
            <div className="desc">
              <p>{d.description}</p>
            </div>
            <button className="btn flex">
              DETAILS
              <HiOutlineClipboard />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
