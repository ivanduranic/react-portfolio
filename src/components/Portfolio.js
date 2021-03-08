import React from "react";
import datenight from "../components/images/datenight.png";
import novelty from "../components/images/novelty.png";
import ESG from "../components/images/ESG.png";
import budgettracker from "../components/images/budgettracker.png";
import employeedir from "../components/images/employeedir.png";
import workout from "../components/images/workout.png";

function Portfolio() {
  return (
    <div className="row my-auto justify-content-md-center">
      <div className="col-md-9" id="container2">
        <h1 className="title">Portfolio</h1>
        <br />
        <div className="row justify-content-center">
        <div className="pf">
        <h5>Date-Night Planner App</h5>
          <img
            src={datenight}
            className="border border-dark"
            alt="Input page of the Project"
          />
          <ul>
            <li>
              <a href="https://ivanduranic.github.io/date-night-planner/"
                >Link to the deployed app</a
              >
            </li>
            <li>
              <a href="https://github.com/ivanduranic/date-night-planner"
                >Link to the GitHub repository</a
              >
            </li>
          </ul>
          </div>
          <br /><br />
          <div className="pf">
          <h5>NOVELty App</h5>
          <img
            src={novelty}
            className="border border-dark"
            alt="First page of the NOVELty"
          />
          <ul>
            <li>
              <a href="https://novelty.herokuapp.com/"
                >Link to the deployed app</a
              >
            </li>
            <li>
              <a href="https://github.com/ivanduranic/NOVELty"
                >Link to the GitHub repository</a
              >
            </li>
          </ul>
          </div>
          <br /><br />
          <div className="pf">
          <h5>Employee Summary Generator</h5>
          <img
            src={ESG}
            className="border border-dark"
            alt="Final page of the employee-summary-generator"
          />
          <ul>
          <li>
              <a href="https://github.com/ivanduranic/employee-summary-generator#installation"
                >Link to the Installation instructions</a
              >
            </li>
            <li>
              <a
                href="https://github.com/ivanduranic/employee-summary-generator"
                >Link to the GitHub repository</a
              >
            </li>
          </ul>
          </div>
          <br /><br />
          <div className="pf">
          <h5>Budget Tracker</h5>
          <img
            src={budgettracker}
            className="border border-dark"
            alt="First page of the NOVELty"
          />
          <ul>
            <li>
              <a href="https://budget-trackerid.herokuapp.com"
                >Link to the deployed app</a
              >
            </li>
            <li>
              <a href="https://github.com/ivanduranic/budget-tracker"
                >Link to the GitHub repository</a
              >
            </li>
          </ul>
          </div>
          <br /><br />
          <div className="pf">
          <h5>Employee Directory</h5>
          <img
            src={employeedir}
            className="border border-dark"
            alt="First page of the NOVELty"
          />
          <ul>
            <li>
              <a href="https://ivanduranic.github.io/employee-directory/"
                >Link to the deployed app</a
              >
            </li>
            <li>
              <a href="https://github.com/ivanduranic/employee-directory"
                >Link to the GitHub repository</a
              >
            </li>
          </ul>
          </div>
          <br /><br />
          <div className="pf">
          <h5>Workout Tracker</h5>
          <img
            src={workout}
            className="border border-dark"
            alt="First page of the NOVELty"
          />
          <ul>
            <li>
              <a href="https://workout-trackerid.herokuapp.com"
                >Link to the deployed app</a
              >
            </li>
            <li>
              <a href="https://github.com/ivanduranic/workout-tracker"
                >Link to the GitHub repository</a
              >
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
