import { useEffect } from "react";
import { auth } from "../../Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = userState(null);
    const [userLoggedIn, setUserLoggedIn] = userState(false);
    const[loading, setLoading] = userState(true);

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
    }, [])

    async function initializeuser(user) {
        if (user) {
            setCurrentUser({ ...user});
            setUserLoggedIn(true);
        }  else{
            setCurrentUser(null);
        }
        setLoading(false);
    }
    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
export { AuthContext };