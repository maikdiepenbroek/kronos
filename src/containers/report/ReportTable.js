import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ReportTableRow from './ReportTableRow';

class ReportTable extends Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Project</th>
              <th>Date</th>
              <th>From-To</th>
              <th>Travel distance</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <ReportTableRow key={event.id} event={event} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default ReportTable;
