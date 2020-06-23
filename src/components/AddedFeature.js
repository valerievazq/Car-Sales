import React from 'react';
import {removeFeature} from '../actions/Features'
import {connect} from 'react-redux';
const AddedFeature = props => {
  const removeItem = e =>{
    e.preventDefault();
    props.removeFeature(props.feature)
   }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = {removeItem}>X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state =>{
  return {
    features: state.car.features
  }
}

export default connect(mapStateToProps,{removeFeature})(AddedFeature);