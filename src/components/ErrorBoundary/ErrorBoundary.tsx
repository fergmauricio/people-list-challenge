import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button/Button";
import "./ErrorBoundary.scss";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Erro não capturado:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary__content">
            <h2>Algo deu errado</h2>
            <p>Desculpe, ocorreu um erro inesperado.</p>
            <div className="error-boundary__actions">
              <Button
                variant="primary"
                onClick={() => window.location.reload()}
              >
                Recarregar página
              </Button>
              <Link to="/">
                <Button variant="ghost">Ir para Home</Button>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
