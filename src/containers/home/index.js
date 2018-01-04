import React, { Component } from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import EventModal from './EventModal';
import { show } from 'redux-modal'
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import 'react-big-calendar/lib/css/react-big-calendar.css'

class Home extends Component {
  componentDidMount() {
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
          defaultView='week'
          scrollToTime={new Date()}
          defaultDate={new Date()}
          onSelectSlot={(slotInfo) => this.handleOpen('event', {slotInfo})}
          onSelectEvent={(slotInfo) => this.handleOpen('event', {slotInfo})}
        />

        <EventModal name="event" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.firestore.ordered.events || []
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ show }, dispatch);

export default compose(
  firestoreConnect(['events']),
  connect(mapStateToProps, mapDispatchToProps)
)(Home)
