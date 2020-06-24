import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/Features";
const AdditionalFeature = (props) => {
  const addItem = (e) => {
    e.preventDefault();
    props.addFeature(props.feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addItem}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = (state) => {
  return { features: state.additionalFeatures };
};
export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
