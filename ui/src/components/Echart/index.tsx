import * as echarts from 'echarts';
import * as React from 'react';
import * as classnames from 'classnames';
import './style.css';

interface Props {
  className?: string;
  options: object;
}

class Echarts extends React.Component<Props, {}> {

  node: any;
  graph: any;

  constructor(props: Props) {
    super(props);
    this.node = document.createElement('div');
  }

  componentDidMount() {
    this.graph = echarts.init(this.node);
    this.graph.setOption(this.props.options);
  }

  render() {
    const { className } = this.props;
    return (
      <div
        className={classnames(
          'echart',
          className,
        )}
        ref={n => { this.node = n; }}
      />
    );
  }
}

export default Echarts; 