import React, { Component } from 'react';
import moment from 'moment';

class ReportTableRow extends Component {

  render() {
    const { event } = this.props;
    return (
      <tr>
        <td>{event.project.name}</td>
        <td>{moment(event.start).format('DD-MM-YYYY')}</td>
        <td>{moment(event.start).format('HH:mm')} - {moment(event.end).format('HH:mm')}</td>
        <td>{event.km} km</td>
        <td>{event.notes}</td>
      </tr>
    );
  }
}
export default ReportTableRow;
