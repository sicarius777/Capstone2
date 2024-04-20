import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import { signInWithEmailAndPassword, signInWithGoogle } from '../../../Firebase/auth'; // Correct import statements
import { useAuth } from '../../../contexts/authContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            signInWithEmailAndPassword(email, password); // Correct function call
        }
    };

    const onGoogleSignIn = async (e) => { // Added async keyword
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            signInWithGoogle(); // Correct function call
        }
    };

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Sign In</button>
            </form>
            <button onClick={onGoogleSignIn}>Sign In with Google</button>
        </>
    );
}

export default Login;
