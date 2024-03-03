import Card from "antd/es/card";
import React, { Component, ErrorInfo, ReactNode } from "react";

const { Meta } = Card;

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  moduleImportError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    moduleImportError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    if (error.name === "ScriptExternalLoadError") {
      return { hasError: true, moduleImportError: true };
    }
    return { hasError: true, moduleImportError: false };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.moduleImportError) {
      return (
        <Card style={{ width: 300, height: 300 }} loading={true}>
          <Meta title="Card title" description="This is the description" />
        </Card>
      );
    }
    if (this.state.hasError) {
      return <p>Sorry.. there was an error</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
