import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  render() {
    return (
      <div style={{margin: 'auto', padding: '20px', width: '400px', boxSizing: 'border-box', backgroundColor: '#ccc', textAlign: 'center'}}>
        <h1>Counter: {this.props.counter}</h1>
        <hr/>
        <div className={'Actions'}>
          <button onClick={() => this.props.onAdd(2)}>Add 2</button>
          <button onClick={() => this.props.onSub(2)}>Sub 2</button> 
        </div>
      </div>
    )
  }
}

function mapStateProps(state) {
  return {
    ...state.counter2
  }
}

function mapDispatchProps(dispatch) {
  return {
    onAdd: number => dispatch({type: 'ADD2', value: number}),
    onSub: number => dispatch({type: 'SUB2', value: number}),
  }
}

export default connect(mapStateProps, mapDispatchProps)(Counter)