import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Counter from './Counter';
import { add, sub, asyncNum } from './redux/actions/actions';

class App extends Component {
  // updateCounter(value) {
  //   this.setState({
  //     counter: this.state.counter + value
  //   })
  // }

  render() {
    // console.log(this.props);
    return (
      <div className={'App'}>
        <h1>
          Счетчик <strong>{this.props.counter}</strong>
        </h1>

        <hr />

        <div className='Actions'>
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={this.props.onRandomNumber}>
            Добавить произвольное число
          </button>
        </div>
        <Counter />

        <div className='Actions'>
          <button onClick={() => this.props.onAsyncNum(500)}>Асинхронно добавить 500 для Counter2</button>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.counter2,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAsyncNum: number => dispatch(asyncNum(number)),
    // onAdd: () => dispatch({ type: 'ADD' }),
    // onSub: () => dispatch({ type: 'SUB' }),
    onRandomNumber: () => dispatch({ type: 'ADD_RANDOM' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
