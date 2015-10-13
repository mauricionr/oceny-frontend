import React from 'react';

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submission: {} };
  }

  componentDidMount() {
    this.loadSubmission();
  }

  loadSubmission() {
    this.setState({
      submission: { id: 1, name: 'Ania', status: 'rejected' }
    });
  }

  render() {
    const submission = this.state.submission;

    return (
      <div>
        <h2>Submission</h2>
        <ul>
          <li>Id: {this.state.submission.id}</li>
          <li>Name: {submission.name}</li>
          <li>status: {submission.status}</li>
        </ul>
      </div>
    )
  }
};

export default Submission;
