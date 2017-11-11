import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// import PropTypes from 'prop-types';
import * as actions from './action';

interface PlayerState {
  PlayerStore: object,
}

function mapStateToProps(state: PlayerState) {
  return {
    player: state.PlayerStore,
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    playerActions: bindActionCreators<any>(actions, dispatch)
  };
}

interface PlayerActions {
  count: Function,
  subtract: Function
};

interface PlayerProps {
  number: Number,
  toJS: Function
}

export interface PlayerPropsClass {
  player: PlayerProps,
  playerActions: PlayerActions,
}

class Player extends React.Component<PlayerPropsClass, any> {
  constructor(props: object) {
    super(props as any);
    this.state = {};
  }

  addOne = (num: number) => this.props.playerActions.count(num);

  subtractOne = (num: number) => this.props.playerActions.subtract(num);

  render() {
    const { number } = this.props.player.toJS();
    return (
      <div className="player">
        <span>{number}</span>
        <button onClick={() => this.addOne(number)}>点击+1</button>
        <button onClick={() => this.subtractOne(number)}>点击-1</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player as any);
