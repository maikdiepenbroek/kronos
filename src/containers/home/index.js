import React, { Component } from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import EventModal from './EventModal';
import { show } from 'redux-modal'
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarView: 'week',
      calendarDate: new Date()
    }
  }

  handleOpen = (name, slotInfo) => {
    this.props.show(name, slotInfo)
  };

  render() {
    const { events } = this.props;

    BigCalendar.setLocalizer(
      BigCalendar.momentLocalizer(moment)
    );

    return (
      <div>
        <h1>Home</h1>

        <BigCalendar
          selectable
          events={events}
          defaultView={this.state.calendarView}
          step={15}
          onView={(view) => {
            this.setState({
              calendarView: view
            });
          }}
          onNavigate={(date) => {
            this.setState({
              calendarDate: date
            });
          }}
          scrollToTime={this.state.calendarDate}
          defaultDate={this.state.calendarDate}
          onSelectSlot={(slotInfo) => this.handleOpen('event', { slotInfo })}
          onSelectEvent={(slotInfo) => this.handleOpen('event', { slotInfo })}
        />

        <EventModal name="event" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.firestore.ordered.events || [],
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ show }, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Home)
