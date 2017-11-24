import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// import PropTypes from 'prop-types';
import * as actions from './action';
import { PlayerStateTypes } from './reducer';
import { AppStoreType } from '../../reducers';
import Demo2Img from './images/demo2.png';
import WrappedHOC from '../../components/WrappedHOC';
import Demo from './components/demo';
import Chart from './components/chart';

interface PlayerPropsClass {
  player: PlayerStateTypes;
  playerActions: actions.PlayerActionsTypes;
}

function mapStateToProps(state: AppStoreType) {
  return {
    player: state.PlayerStore,
  };
}

function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
    playerActions: bindActionCreators<{}>(actions, dispatch)
  };
}

const demo2 = () => (
  <div className="demo2">
    <img src={Demo2Img} alt="demo2" />
    赵凌风在这里玩
  </div>
);

const Demo2 = WrappedHOC(demo2);

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
        <button onClick={() => this.addOne(countNumber as number)}>点击+1</button>
        <button onClick={() => this.subtractOne(countNumber as number)}>点击-1</button>
        <Demo name={'张泽玮'} />
        <Demo2 />
        <Demo name={'贺于鹏'} />
        <Chart />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player as React.ComponentType<PlayerPropsClass>);
