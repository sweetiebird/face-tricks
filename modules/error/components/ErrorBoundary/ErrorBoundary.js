import React from 'react';

import { Error } from 'services';

import { DefaultText } from 'components';


class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = error => ({
    hasError: !!error,
  });

  componentDidCatch = (error, errorInfo) => {
    Error.log(error, errorInfo);
  };

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <DefaultText>
          Something went wrong 😓
        </DefaultText>
      );
    }

    return children;
  }
}


export default ErrorBoundary;
