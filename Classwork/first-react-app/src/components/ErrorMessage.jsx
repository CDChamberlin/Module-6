function ErrorMessage({error, resetErrorBoundary }) {
    console.error(error);

    //call resetErrorBoundary() to reset the error boundary and retry the render
    // will work for errors caused by changing state but not syntax errors

    return (
        <div className="ErrorMessage">
            <p>An error Occured:</p>
            <pre>{error.message}</pre>
            <button onClick={() => resetErrorBoundary()}>Try Again?</button>
        </div>
    )
}

export default ErrorMessage