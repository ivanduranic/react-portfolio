import React from "react";

function AboutMe() {
  return (
    <div className="container my-auto justify-content-md-center">
      <div className="row">
        <div className="col-md-12" id="containerAbout">
          <h1 className="title">About Me</h1>
          <img
            className="col-sm-12"
            id="profil"
            src={require("../components/images/Profilephoto.jpg")}
            alt="Ivan Duranic"
          />
          <p className="col-sm-12" id="Bio">
            Full-Stack Web Developer and Croatian Army veteran with extensive
            experience in training adults. Recently earned a certificate in full
            stack development from the University of Toronto, with newly
            developed skills in JavaScript, NodeJS, and responsive web design.
            Known as a very organized and efficient communicator who
            successfully led the platoon of soldiers in the ISAF mission in
            Afghanistan. Passionate about educating and uplifting beginner level
            students at any area of education. Excited to leverage his skills as
            part of an optimistic, quality-driven team of instructors to bring
            the coding knowledge to inquiring minds. As a student enrolled in a
            Web Development bootcamp I was responsible for creating applications
            as part of my homework regime. Varying from task to task, I was
            given a time frame, user story and acceptance criteria to design and
            implement the client side application. My JavaScript based solutions
            were crucial for an intuitive and easy-to-navigate user experience.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div id="links">
          <a
            href={require("../components/documents/MyResume.pdf")}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkImg"
              src={require("../components/images/Resume.png")}
              data-toggle="tooltip"
              data-placement="top"
              title="link to my resume"
              alt=""
            />
          </a>
          <a
            href="https://github.com/ivanduranic"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkImg"
              src={require("../components/images/GitHub.png")}
              data-toggle="tooltip"
              data-placement="top"
              title="link to my github profile"
              alt=""
            />
          </a>
          <a
            href="www.linkedin.com/in/ivan-đuranić-65544295"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkImg"
              src={require("../components/images/LinkedIn.png")}
              data-toggle="tooltip"
              data-placement="top"
              title="link to my LinkedIn profile"
              alt=""
            />
          </a>
          <a
            href="https://www.facebook.com/ivan.duranic/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkImg"
              src={require("../components/images/Facebook.png")}
              data-toggle="tooltip"
              data-placement="top"
              title="link to my Facebook profile"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
