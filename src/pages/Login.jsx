
import { useState } from 'react';
import Navbar from '../Components/Navbar'

function Login() {
 <Navbar/>
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');

 const handleSubmit = async (e) => {
   e.preventDefault();
   setError(''); // Clear any previous errors

   try {
     // Replace this with your actual API call to your backend
     const response = await fetch('/api/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ username, password }),
     });

     if (!response.ok) {
       const errorData = await response.json(); // Try to parse error response
       const errorMessage = errorData.message || 'Login failed'; // Handle different error types
       throw new Error(errorMessage);
     }

     const data = await response.json();
     // Handle successful login (e.g., redirect to another page)
     console.log('Login successful:', data);
     // Redirect or update state as needed
   } catch (error) {
     setError(error.message);
   }
 };

  return (
    <div className='main' > 
   <div className="login-container">
     <h1>Login</h1>
     {error && <div className="error">{error}</div>}
     <form onSubmit={handleSubmit}>
       <label htmlFor="username">Username:</label>
       <input
         type="text"
         id="username"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         required
       />
       <label htmlFor="password">Password:</label>
       <input
         type="password"
         id="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         required
       />
       <button type="submit">Login</button>
     </form>
      </div>
      </div>
  );

}


export default Login