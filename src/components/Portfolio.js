import React from "react";

function Portfolio() {
  return (
    <div className="row my-auto justify-content-md-center">
      <div className="col-md-9" id="container2">
        <h1 className="title">Portfolio</h1>
        <br />
        <div className="row justify-content-center">
          
          <div className="pf">
            <button
              type="button"
              data-toggle="modal"
              data-target="#modalCenterQuiz"
            >
              <img src={require("../components/images/datenight.png")} alt="" />
              <div className="pftitle">Date Night Planner</div>
            </button>
            <div
              className="modal fade"
              id="modalCenterQuiz"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      Date Night Planner
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <a
                      href="https://ivanduranic.github.io/date-night-planner"
                      target="_blank"
                    >
                      <h4>Deployed App</h4>
                    </a>
                    <br />
                    <a
                      href="https://github.com/ivanduranic/date-night-planner"
                      target="_blank"
                    >
                      <h4>Github repository</h4>
                    </a>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Novelty */}
          <div className="pf">
            <button
              type="button"
              data-toggle="modal"
              data-target="#modalCenterWeather"
            >
              <img
                src={require("../components/images/novelty.png")}
                alt=""
              />
              <div className="pftitle">NOVELty</div>
            </button>
            <div
              className="modal fade"
              id="modalCenterWeather"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                      NOVELty
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <a
                      href="https://novelty.herokuapp.com/"
                      target="_blank"
                    >
                      <h4>Deployed App</h4>
                    </a>
                    <br />
                    <a
                      href="https://github.com/ivanduranic/NOVELty"
                      target="_blank"
                    >
                      <h4>Github repository</h4>
                    </a>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Employee Summary Generator */}
          <div className="pf">
            <button
              type="button"
              data-toggle="modal"
              data-target="#modalCenterTraveler"
            >
              <img src={require("../components/images/ESG.png")} alt="" />
              
              <div className="pftitle">Employee Summary Generator</div>
            </button>
            <div
              className="modal fade"
              id="modalCenterTraveler"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                    Employee Summary Generator
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <a
                      href="https://github.com/ivanduranic/employee-summary-generator"
                      target="_blank"
                    >
                      <h4>Github repository</h4>
                    </a>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Budget Tracker */}
          <div className="pf">
            <button
              type="button"
              data-toggle="modal"
              data-target="#modalCenterNote"
            >
              <img src={require("../components/images/budgettracker.png")} alt="" />
              <div className="pftitle">Budget Tracker</div>
            </button>
            <div
              className="modal fade"
              id="modalCenterNote"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">
                    Budget Tracker
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <a
                      href="https://budget-trackerid.herokuapp.com"
                      target="_blank"
                    >
                      <h4>Deployed App</h4>
                    </a>
                    <br />
                    <a
                      href="https://github.com/ivanduranic/budget-tracker"
                      target="_blank"
                    >
                      <h4>Github repository</h4>
                    </a>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>