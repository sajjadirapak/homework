import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {INC,DEC} from './actions/App.actions';
class Show extends React.Component {
    render(){
        return(
            <div>
            <h1>Count = {this.props.count}</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      count: state.app
    }
}
  
  const mapDispatchToProps = (dispatch) => {
    return {
      inc: (val) => {
        dispatch(INC(val));
      },
      dec: (val) => {
        dispatch(DEC(val));
      }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Show));