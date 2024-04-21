import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithGoogle } from '../../../Firebase/auth'; // Correct import statements
import { useAuth } from '../../../contexts/authContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [error, setError] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await signInWithEmailAndPassword(email, password);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await signInWithGoogle();
            } catch (error) {
                setError(error.message);
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div>
            {userLoggedin && (<Navigate to= {'C:\Users\User\Desktop\Capstone2\Codex_of_worlds\src\main.jsx'} replace={true}/>)} // may need to change.
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit" disabled={isSigningIn}>{isSigningIn ? 'Signing In...' : 'Sign In'}</button>
            </form>
            <button onClick={onGoogleSignIn} disabled={isSigningIn}>Sign In with Google</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default Login;

