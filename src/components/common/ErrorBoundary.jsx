import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    error: false,
  };

  static getDerivedStateFromError() {
    return {
      error: true,
    };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="grid min-h-screen place-items-center bg-slate-50 px-6 py-12 text-center text-slate-700">
          <div>
            <h1 className="mb-3 text-3xl font-bold text-slate-900">
              Something went wrong
            </h1>

            <p className="text-slate-500">
              Please refresh the page.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
