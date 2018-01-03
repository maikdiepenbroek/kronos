import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllItems } from "../../actions/items-actions";

class Home extends Component {
  componentDidMount() {
    this.props.getAllItems();
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <p>Count: {items.length}</p>
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
      getAllItems
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
