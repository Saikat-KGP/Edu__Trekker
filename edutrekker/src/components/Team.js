import React from "react";
import "./Team.css";
import mentor1 from "../img/mentor_1.png";

const Team = () => {
  return (
    <div className="team__parent">
      <div className="team__members">
        <h1>Team Members</h1>

        <div className="team__profiles">
          <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>
              <h3>
                Mohit Gupta
              </h3>
              <h5>
                IIT KHARAGPUR
              </h5>
            </p>

            <div className="team__info">
              <h4>Mohit Gupta</h4>Hardworking , Confident and Brave to face any any problem courageously
            </div>
          </div>
          <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>
              <h3>
                Dwibesh  Panigrahy              </h3>
              <h5>
                IIT KHARAGPUR
              </h5>
            </p>

            <div className="team__info">
              <h4>Mohit Gupta</h4>Hardworking , Confident and Brave to face any problem courageously
            </div>
          </div>
          <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>
              <h3>
                Om Prakash Lenka              </h3>
              <h5>
                IIT KHARAGPUR
              </h5>
            </p>

            <div className="team__info">
              <h4>Mohit Gupta</h4>Hardworking ,Determined and  Confident  to face any problem courageously
            </div>
          </div>
          {/* <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>Mohit Gupta</p>
            <div className="team__info">
              <h4>Mohit Gupta</h4>I have done so and so many things that you
              even what your father cannot believe
            </div>
          </div> */}
          {/* <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>Mohit Gupta</p>
            <div className="team__info">
              <h4>Mohit Gupta</h4>I have done so and so many things that you
              even what your father cannot believe
            </div>
          </div> */}
          {/* <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>Mohit Gupta</p>
            <div className="team__info">
              <h4>Mohit Gupta</h4>I have done so and so many things that you
              even what your father cannot believe
            </div>
          </div> */}
          {/* <div className="team__cards">
            <img className="team__img" src={mentor1} alt="" />
            <p>Mohit Gupta</p>
            <div className="team__info">
              <h4>Mohit Gupta</h4>I have done so and so many things that you
              even what your father cannot believe
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
