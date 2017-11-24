import * as React from 'react';
import WrappedHOC from '../../../components/WrappedHOC';
import * as PropTypes from 'prop-types';

interface Props {
  name: string;
}

class Demo extends React.Component<Props, {}> {

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="demo1">
        {this.props.name}在这里玩
      </div>
    );
  }
}

export default WrappedHOC(Demo);
