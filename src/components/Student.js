import React from "react";
import "./student.css";

class Student extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false,
      failure: false,
    };
  }

  componentDidMount() {
    this.setState({
      score: this.props.score,
    });
  }
  addScore() {
    console.log("I am clicked");
    this.setState(
      {
        score: this.state.score + 1,
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({
            success: true,
            failure: false,
          });
        }
      }
    );
  }
  subractScore() {
    this.setState(
      {
        score: this.state.score - 1,
      },
      () => {
        if (this.state.score < 340) {
          this.setState({
            failure: true,
            success: false,
          });
        }
      }
    );
  }

  render() {
    const isSuccess = this.state.success;
    const isfailure = this.state.failure;
    let text;

    if (isSuccess) {
      text = <span className="success">Success</span>;
    } else if (isfailure) {
      text = <span className="failure">Failure</span>;
    } else {
      text = "";
    }

    return (
      <div className="student">
        <div className="left">
          <h2 className="studentName">
            {this.props.name}

            <button className="addScoreButton" onClick={() => this.addScore()}>
              +
            </button>
            <button
              className="subractScoreButton"
              onClick={() => this.subractScore()}
            >
              -
            </button>
          </h2>

          <p className="universityName">
            {this.props.univeristy} {text}
          </p>
        </div>

        <div className="right">
          <div className="score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}

export default Student;
