import React, { useState, useEffect, ErrorInfo } from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [errorState, setErrorState] = useState<ErrorBoundaryState>({
    hasError: false,
    error: null,
    errorInfo: null,
  });

  useEffect(() => {
    if (errorState.hasError) {
      // You can perform any additional logging or error handling here
      console.error(errorState.error);
    }
  }, [errorState]);

  const componentDidCatch = (error: Error, errorInfo: ErrorInfo) => {
    setErrorState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  };

  if (errorState.hasError) {
    console.log(errorState.error);
    // You can customize the error UI here
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>{errorState.error && errorState.error.toString()}</p>
        <div>{errorState.errorInfo && errorState.errorInfo.componentStack}</div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;
