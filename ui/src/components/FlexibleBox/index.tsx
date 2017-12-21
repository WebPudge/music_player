import * as React from 'react';
import './style.css';
import * as PropTypes from 'prop-types';

interface EventObject {  
  clientX: number;  
  clientY: number;  
}

interface EventHandlers {  
  onMouseDown: (event: EventObject) => void;
  onMouseUp: () => void;
}

interface State {
  dragging: Boolean;
  top: number;
  left: number;
  pos: {
    startX: number,
    startY: number,
  };
}

interface Props {
  children?: object;
}

class FlexibleBox extends React.Component<Props, State> {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      top: 0,
      left: 0,
      dragging: false,
      pos: {
        startX: 0,
        startY: 0,
      }
    };
  }

  dragStart = (event: EventObject) => {
    const curX = event.clientX;
    const curY = event.clientY;
    this.setState({
      dragging: true,
      pos: {
        startX: curX,
        startY: curY,
      },
    });
    document.body.addEventListener('mousemove', this.dragMove, false);
  }

  dragMove = (event: EventObject) => {
    if (this.state.dragging) {
      const curX = event.clientX;
      const curY = event.clientY;
      const moveX = curX - this.state.pos.startX;
      const moveY = curY - this.state.pos.startY;
      this.setState({
        top: this.state.top + moveY,
        left: this.state.left + moveX,
        pos: {
          startX: curX,
          startY: curY,
        },
      });
    }
  }

  dragStop = () => {
    this.setState({
      dragging: false,
    });
    document.body.removeEventListener('mousemove', this.dragMove.bind(this), false);
  }

  render() {
    const dragEnevts: EventHandlers = {
      onMouseDown: this.dragStart,
      onMouseUp: this.dragStop,
    };

    const style = {
      transform: `translate(${this.state.left}px, ${this.state.top}px)`,
    };

    return (
      <div style={style} className="flexible-box">
        <div {...dragEnevts} className="flexible-box-drager" />
        {this.props.children}
        <div className="flexible-box-scaler" />
      </div>
    );
  }
}

export default FlexibleBox;
