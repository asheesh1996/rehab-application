import React, { Component } from "react";
import SurveyListList from "./SurveyListChoices";

export class SurveyList extends Component {
  onSubmit = () => {
    const id = document.querySelector(".surveySelect").value;
    this.props.setSurveyById(id);
  };

  render() {
    return (
      <div className="renderContainer">
        <p>
          Your Care Provider has assigned you surveys to complete. Please
          complete them by their due date.
        </p>
        <select className="surveySelect">
          <SurveyListList surveys={this.props.surveys} />
        </select>

        <button
          className="genericButton"
          onClick={() => this.onSubmit()}
          style={buttonStyle}
        >
          submit
        </button>
      </div>
    );
  }
}

const buttonStyle = {
  flex: "1"
};

export default SurveyList;
