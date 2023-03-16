import store from "../Config/store/store"
import { setLoggedUser } from "../Config/store/actions/LoggedUserActions"
import { DefaultLoggedUser } from "../GlobalVars"
import { LoginFirebase, register, signInWithGoogle } from "../Config/firebase/auth"
import { Users } from "../Data/User"


export const LoginUtil = (email, password) => {
    return LoginFirebase(email, password)
}


export const LogarComGooglePopup = () => {
    return signInWithGoogle();
};
