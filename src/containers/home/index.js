import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import EventModal from './EventModal';
import { show } from 'redux-modal'

class Home extends Component {
  componentDidMount() {
  }

  handleOpen = (name, slotInfo) => {
    this.props.show(name, slotInfo)
  };

  render() {
    BigCalendar.setLocalizer(
      BigCalendar.momentLocalizer(moment)
    );

    return (
      <div>
        <h1>Home</h1>

        <BigCalendar
          selectable
          events={[]}
          defaultView='week'
          scrollToTime={new Date()}
          defaultDate={new Date()}
          onSelectSlot={(slotInfo) => this.handleOpen('event', {slotInfo})}
        />

        <EventModal name="event" />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      show
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
