/* eslint @typescript-eslint/no-explicit-any: ["off"] */

import React, { ErrorInfo, PropsWithChildren } from 'react';

class ErrorBoundary extends React.Component<PropsWithChildren, { error: any, errorInfo: any }> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { errorInfo, error } = this.state;
    const { children } = this.props;

    if (errorInfo) {
      // Error path
      return (
        <div style={{ paddingLeft: '30px' }}>
          <h2>В приложении возникла ошибка. Пожалуйста, перезагрузите страницу</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return children;
  }
}

export default ErrorBoundary;
