import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application error boundary caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-surface px-4">
          <div className="card-base max-w-md w-full p-8 text-center space-y-4">
            <h1 className="text-2xl font-display font-bold text-dark-900">
              Something went wrong
            </h1>
            <p className="text-sm text-dark-500">
              We encountered an unexpected issue while loading this page. Please try returning to the home page.
            </p>
            <Button onClick={this.handleReset} variant="primary" size="md">
              Return Home
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
