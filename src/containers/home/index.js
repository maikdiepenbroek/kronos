import React, { Component } from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllItems } from "../../actions/items-actions";

class Home extends Component {
  componentDidMount() {
    this.props.getAllItems();
  }

  render() {
    const { items, changePage } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <p>Count: {items.length}</p>

        <p>
          <button onClick={() => changePage()}>
            Go to about page via redux
          </button>
        </p>
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
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
