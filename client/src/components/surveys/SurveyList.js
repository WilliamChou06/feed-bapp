import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return (
      <div className="row">
        {this.props.surveys.reverse().map(survey => (
          <div className="col s12 m6">
            <div key={survey.id} className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{survey.title}</span>
                <p>{survey.body}</p>
                <p className="right">
                  Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                </p>
              </div>
              <div class="card-action">
                <a href="#">Yes: {survey.yes}</a>
                <a className="right" href="#">No: {survey.no}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys: surveys
});

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
