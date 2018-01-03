import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

class Home extends Component {
  componentDidMount() {
  }

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
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}` +
            `\naction: ${slotInfo.action}`
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
