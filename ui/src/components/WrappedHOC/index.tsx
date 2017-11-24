import * as React from 'react';
import FlexibleBox from '../FlexibleBox';

export default function (WrappedComponent: React.ComponentType) {
  return class Wrapper extends React.Component<any, {}> {
    render() {
      return (
        <FlexibleBox>
          <WrappedComponent {...this.props} />
        </FlexibleBox>
      );
    }
  };
}