import IllustrationIntro from "./images/illustration-intro.svg";

import "./ContentComponent.css";
export function ContentComponent() {
  return (
    <div className="content-container">
      <div className="top-content">
        <div className="top-left-content">
          <h2 className="bring-Everyone">
            Bring everyone together to build better products.
          </h2>
          <p className="manage-text">
            Manage makes it simple for software teams to plan day-to-day task
            while keeping the larger team goals in view
          </p>
          <button className="content-Started-btn">Get Started</button>
        </div>
        <div className="top-right-content">
          <img
            src={IllustrationIntro}
            alt="statistics-img"
            className="statistics-img"
          />
        </div>
      </div>

      <div className="bottom-content">
        <div className="bottom-left-content">
          <h2 className="different-Manage">What's different about Manage?</h2>
          <p className="different-Manage-text">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="bottom-right-content">
          <div className="statement-One-container">
            <div className="title-one">
              <h3 className="orange-One">01</h3>
              <p className="track-company">Track company-wide progress</p>
            </div>

            <p className="description-one">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>

          <div className="statement-Two-container">
            <div className="title-two">
              <h3 className="orange-Two">02</h3>
              <p className="advanced-built">Advanced built-in reports</p>
            </div>

            <p className="description-Two">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>

          <div className="statement-Three-container">
            <div className="title-three">
              <h3 className="orange-Three">03</h3>
              <p className="everything">Everything you need in one place</p>
            </div>

            <p className="description-Three">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
