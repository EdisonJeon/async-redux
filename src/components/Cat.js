import React from "react";
import { connect } from "react-redux";
import { getCat } from "../actions";

const Cat = (props) => {
  const { getCat, cat, error, isFetching } = props;
  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return (
      <div>
        <h2>Fetching cat fact for ya!</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Random Cat Fact!</h1>
      <p>{cat.fact}</p>
      <p>{cat.length}</p>
      <button onClick={() => getCat()}>Get Cat Fact!</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cat: state.cat,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getCat })(Cat);
