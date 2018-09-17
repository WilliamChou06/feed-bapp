import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FIELDS from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => (
  <div>
    <h5>Please confirm your entries</h5>
    {FIELDS.map(({ name, label }) => (
      <div key={label}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    ))}
    <button onClick={onCancel} className="btn left red">
      BACK
    </button>
    <button onClick={() => submitSurvey(formValues, history)} className="green white-text btn-flat right">
      Send Survey <i className="material-icons right">email</i>
    </button>
  </div>
);

const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values
});

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
