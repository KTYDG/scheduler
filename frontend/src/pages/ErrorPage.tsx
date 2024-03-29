import { isRouteErrorResponse, useRouteError } from 'react-router-dom';


function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {

    return (
      <div>
        <h1>{error.status}</h1>
        <h2>{error.data.sorry}</h2>
        <p>
          Go ahead and email {error.data.hrEmail} if you
          feel like this is a mistake.
        </p>
      </div>
    );
  }

  throw error;
}

export default ErrorPage;