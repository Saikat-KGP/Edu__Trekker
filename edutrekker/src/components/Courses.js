import React from "react";
import "./Courses.css";
import adv from '../img/adv.png'
import nta from '../img/nta.png'
import neet from '../img/neet.png'

const Courses = () => {
  const handleClick = () => {
    window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSfJr0PDkIKlsHNt_Xx5kyiRQB1aiGl0g-t2CoFDSS6PcH3g1Q/viewform?vc=0&c=0&w=1&flr=0';
  };
  return (

    <div className="courses__parent">
      <div className="courses__courses">
        <h1>Courses</h1>
        <div className="courses__description">
          <div className="courses__cards">
            <h1>249.00/-</h1>
            <h2>NEET</h2>
            <img className="courses__img" src={neet} alt="" />
            <p>
              this course offers you many many things that you wanted to get
              from other couaching indeustries but failed to get that out of it
              all
            </p>
            <button onClick={handleClick}>Enroll</button>
          </div>
          <div className="courses__cards">
            <h1>199.00/-</h1>
            <h2>NTA</h2>
            <img className="courses__img" src={nta} alt="" />
            <p>
              this course offers you many many things that you wanted to get
              from other couaching indeustries but failed to get that out of it
              all
            </p>
            <button onClick={handleClick}>Enroll</button>
          </div>
          <div className="courses__cards">
            <h1>299.00/-</h1>
            <h2>Jee Advanced</h2>
            <img className="courses__img" src={adv} alt="" />
            <p>
              this course offers you many many things that you wanted to get
              from other couaching indeustries but failed to get that out of it
              all
            </p>
            <button onClick={handleClick}>Enroll</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Courses;
