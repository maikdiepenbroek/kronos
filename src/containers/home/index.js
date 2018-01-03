import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import EventModal from './EventModal';
import { show } from 'redux-modal'
import 'react-big-calendar/lib/css/react-big-calendar.css'

class Home extends Component {
  componentDidMount() {
  }

  handleOpen = (name, modalData) => {
    this.props.show(name, modalData)
  };

  render() {
    const { projects } = this.props;

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
          onSelectSlot={(slotInfo) => this.handleOpen('event', {modalData : {slotInfo, projects}})}
        />

        <EventModal name="event" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      show
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
