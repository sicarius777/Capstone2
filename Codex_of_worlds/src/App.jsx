import { useState } from 'react';
import { AuthContext } from './contexts/authContext';

import Login from './Components/auth/login/index'; // Update the path to your Login component

function App() {
  const { userLoggedIn } = useAuth(); // Assuming you have a function to check user login status

  // Redirect to main page if user is logged in
  if (userLoggedIn) {
    return <Navigate to="/main" replace={true} />; // Adjust the path as needed
  }

  // Render the Login component if user is not logged in
  return <Login />;
}

export default App;