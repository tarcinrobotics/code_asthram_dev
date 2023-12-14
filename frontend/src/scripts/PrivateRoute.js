// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  // Check if the user is authenticated, e.g., by checking localStorage or your authentication state
  const isAuthenticated = /* Implement your authentication logic here */ true;

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
