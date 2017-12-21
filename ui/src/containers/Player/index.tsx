import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// import PropTypes from 'prop-types';
import * as actions from './action';
import { PlayerStateTypes } from './reducer';
import { AppStoreType } from '../../reducers';
import Demo2Img from './images/demo2.png';
import WrappedHOC from '../../components/WrappedHOC/RndHOC';
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
  </div>
);

const Demo2 = WrappedHOC(demo2, '.container');

class Player extends React.Component<PlayerPropsClass, { mode: 'view' | 'edit', zoom: number }> {
  constructor(props: object) {
    super(props as PlayerPropsClass);
    this.state = {
      mode: 'view',
      zoom: 1,
    };
  }

  addOne = (num: number) => this.props.playerActions.count(num);

  subtractOne = (num: number) => this.props.playerActions.subtract(num);

  changeMode = () => {
    const { mode } = this.state;
    this.setState({
      mode: mode === 'view' ? 'edit' : 'view'
    });
  }

  changeZoom = (zoomName: 'zoomIn' | 'zoomOut') => {
    const { zoom } = this.state;
    let temlZoom = zoom;
    const zoomLimit = {
      max: 2.0,
      min: 0.1,
    };
    if (zoom < zoomLimit.max && zoom > zoomLimit.min) {
      if (zoomName === 'zoomIn') {
        temlZoom = zoom - 0.1;
      }
      if (zoomName === 'zoomOut') {
        temlZoom = zoom + 0.1;
      }
    }
    this.setState({
      zoom: temlZoom
    });
  }

  render() {
    return (
      <div className="player">
        <div className="container">
          <div
            className="content"
            style={{
              transform: `scale(${this.state.zoom})`,
              position: 'absolute',
              top: 0,
              left: 0
            }}
          >
            <Demo name={'张泽玮'} mode={this.state.mode} />
            <Demo2 mode={this.state.mode} />
            <Demo name={'贺于鹏'} mode={this.state.mode} />
            <Chart mode={this.state.mode} />
          </div>
        </div>
        <div className="controler">
          <h2>控制台</h2>
          <button onClick={this.changeMode}>切换模式</button>
          <span>当前模式: {this.state.mode}</span>
          <button onClick={() => { this.changeZoom('zoomOut'); }}>放大</button>
          <button onClick={() => { this.changeZoom('zoomIn'); }}>缩小</button>
          <span>当前倍数: {this.state.zoom}</span>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player as React.ComponentType<PlayerPropsClass>);
