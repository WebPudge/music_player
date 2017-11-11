import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// import PropTypes from 'prop-types';
import * as actions from './action';

interface PlayerState {
  PlayerStore: object;
}

interface PlayerActions {
  count: Function;
  subtract: Function;
}

interface PlayerProps {
  number: Number;
  toJS: Function;
}

export interface PlayerPropsClass {
  player: PlayerProps;
  playerActions: PlayerActions;
}

function mapStateToProps(state: PlayerState) {
  return {
    player: state.PlayerStore,
  };
}

function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
    playerActions: bindActionCreators<{}>(actions, dispatch)
  };
}

class Player extends React.Component<PlayerPropsClass, {}> {
  constructor(props: object) {
    super(props as PlayerPropsClass);
    this.state = {};
  }

  addOne = (num: number) => this.props.playerActions.count(num);

  subtractOne = (num: number) => this.props.playerActions.subtract(num);

  render() {
    const { countNumber } = this.props.player.toJS();
    return (
      <div className="player">
        <span>{countNumber}</span>
        <button onClick={() => this.addOne(countNumber)}>点击+1</button>
        <button onClick={() => this.subtractOne(countNumber)}>点击-1</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player as React.ComponentType<PlayerPropsClass>);
