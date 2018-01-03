import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllItems } from "../../actions/items-actions";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import DynamicModal from './DynamicModal';
import { show } from 'redux-modal'

class Home extends Component {
  componentDidMount() {
    this.props.getAllItems();
  }

  handleOpen = (name, slotInfo) => {
    this.props.show(name, slotInfo)
  };

  render() {
    const { items, changePage } = this.props;

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

        <DynamicModal name="event" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllItems,
      show
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
