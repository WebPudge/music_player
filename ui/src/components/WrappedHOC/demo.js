import React from 'react';
import Rnd from 'react-rnd';

class RndWrapper extends React.Component {
  static defaultProps = {
    config: {
      x: 0,
      y: 0,
      width: 300,
      height: 200,
    },
    mode: 'view' | 'edit',
  }

  checkMode = mode => {
    const flag = mode === 'edit';
    const enableResizing = {};
    const resizePoints = [
      bottom,
      bottomLeft,
      bottomRight,
      left,
      right,
      top,
      topLeft,
      topRight
    ];
    const disableDragging = !flag;
    resizePoints.forEach(point => {
      if (!enableResizing[point]) {
        enableResizing[point] = flag;
      }
    });
    return { 
      enableResizing,
      disableDragging
    };
  }

  render() {
    const { children, config, mode } = this.props;
    const shouldEdit = this.checkMode(mode);
    return (
      <Rnd
        default={config}
        {...shouldEdit}
      >
        {children}
      </Rnd>
    );
  }
}