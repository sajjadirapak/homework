import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {INC,DEC} from './actions/App.actions';
class Counter extends React.Component {
    render(){
        return(
            <div>
            <button onClick={()=>this.props.inc(1)}>+</button>
            <button onClick={()=>this.props.dec(1)}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        count:state.app
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      inc: (val) => {
        dispatch(INC(val))
      },
      dec: (val) => {
        dispatch(DEC(val))
      }
    }
}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Counter));