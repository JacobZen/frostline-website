import { Component, type ReactNode, type ErrorInfo } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center" data-testid="error-boundary">
          <div className="max-w-md space-y-6">
            <h1 className="text-2xl font-semibold text-foreground">
              Noe gikk galt
            </h1>
            <p className="text-muted-foreground">
              En uventet feil har oppstått. Vennligst prøv å laste siden på nytt.
            </p>
            <Button
              onClick={this.handleReload}
              data-testid="button-reload"
            >
              Prøv igjen
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
