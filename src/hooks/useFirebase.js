import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init.js";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubAuthProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }

        })
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        logout
    }
}
export default useFirebase;