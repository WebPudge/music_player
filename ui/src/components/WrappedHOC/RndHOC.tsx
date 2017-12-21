import * as React from 'react';
import Rnd from 'react-rnd';

export default function (WrappedComponent: React.ComponentType, bounds: string = '') {
  return class Wrapper extends React.Component<any, {}> {

    constructor(props: any) {
      super(props);
      const { enableResizing, disableDragging } = this.checkMode(props.mode);
      this.state = {
        enableResizing,
        disableDragging
      };
    }

    componentWillReceiveProps(nextProps: any) {
      const { mode } = nextProps;
      const {  enableResizing, disableDragging } = this.checkMode(mode);
      this.setState({ enableResizing, disableDragging });
    }

    checkMode = (mode: 'view' | 'edit') => {
      const flag = mode === 'edit';
      const enableResizing = {};
      const resizePoints = [
        'bottom',
        'bottomLeft',
        'bottomRight',
        'left',
        'right',
        'top',
        'topLeft',
        'topRight'
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
      return (
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 320,
            height: 200,
          }}
          bounds={bounds}
          {...this.state}
        >
          <WrappedComponent {...this.props} />
        </Rnd>
      );
    }
  };
}