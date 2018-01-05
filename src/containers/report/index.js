import React, { Component } from "react";
import moment from 'moment';
import { Row, Col, Form, FormGroup, ControlLabel, Well } from 'react-bootstrap';
import Datetime from 'react-datetime';
import Select from 'react-select';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import ReportTable from './ReportTable';
import 'react-big-calendar/lib/css/react-big-calendar.css'

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: '',
      start: moment().set('day', 1),
      end: moment().endOf('month'),
    }
    this.filteredEvents = this.filteredEvents.bind(this);
  }

  handleStartChange = (moment) => {
    this.setState({ start: moment });
  }

  handleEndChange = (moment) => {
    this.setState({ end: moment });
  }

  handleProjectChange = (selectedOption) => {
    this.setState({ project: selectedOption });
  }

  filteredEvents() {
    var events = [];
    this.props.events.map(event => {
      if (moment(event.start).isAfter(this.state.start)
        && moment(event.start).isBefore(this.state.end)
        && (this.state.project === '' || this.state.project === null || event.project.id === this.state.project.id)) {
        events.push(event);
      }
    });
    return events;
  }

  calculateTotals() {
    var totalMinutes = 0;
    this.filteredEvents().map(event => {
      if (moment(event.start).isAfter(this.state.start)) {
        var start = moment(event.start, "HH:mm");
        var end = moment(event.end, "HH:mm");
        var minutes = end.diff(start, 'minutes');
        totalMinutes += minutes;
      }
    });
    return moment().hour(0).minute(totalMinutes).format("HH:mm");
  }

  render() {
    const { projects } = this.props;

    return (
      <div>
        <h1>Reports</h1>
        <Form>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup>
                <ControlLabel>Start</ControlLabel>
                <Datetime
                  value={this.state.start}
                  dateFormat="DD-MM-YYYY"
                  timeFormat={false}
                  onChange={this.handleStartChange}
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <ControlLabel>End</ControlLabel>
                <Datetime
                  value={this.state.end}
                  dateFormat="DD-MM-YYYY"
                  timeFormat={false}
                  onChange={this.handleEndChange}
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <FormGroup>
                <ControlLabel>Project</ControlLabel>
                <Select
                  name="project"
                  placeholder="Show all projects"
                  value={this.state.project}
                  onChange={this.handleProjectChange}
                  valueKey="id"
                  labelKey="name"
                  options={projects}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ReportTable events={this.filteredEvents()} />
              <Well bsSize="small"><strong>Total hours in selection:</strong> {this.calculateTotals()}</Well>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.firestore.ordered.events || [],
  projects: state.firestore.ordered.projects || [],
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export default compose(
  firestoreConnect(['events', 'projects']),
  connect(mapStateToProps, mapDispatchToProps)
)(Report)
