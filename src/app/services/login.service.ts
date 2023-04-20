import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth"
import { Injectable } from "@angular/core"
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    Unsubscribe,
} from "firebase/auth"
import { Router } from "@angular/router"

@Injectable({
    providedIn: "root",
})
export class LoginService {
    constructor(private authService: Auth, private router: Router) {}

    // Default signUp function provided by FireBase.

    async signUp(email: string, password: string): Promise<void> {
        try {
            await createUserWithEmailAndPassword(
                this.authService,
                email,
                password
            )
            this.router.navigateByUrl("categories")
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error)
        }
    }

    // Default login function provided by FireBase.

    logIn(email: string, password: string) {
        signInWithEmailAndPassword(this.authService, email, password)
            .then(() => {
                this.router.navigateByUrl("categories")
                console.log("Connexion réussie")
            })
            .catch((error: any) => {
                console.error("Erreur lors de la connexion:", error)
                alert("Une erreur est survenue !" + error)
            })
    }

    // Default logout function provided by Firebase.

    logOut() {
        signOut(this.authService)
            .then(() => {
                console.log("Déconnexion réussie")
            })
            .catch((error: any) => {
                console.error("Erreur lors de la déconnexion:", error)
            })
    }

    // initAuthListener checks if the user is connected
    initAuthListener(
        updateLoginStatus: (loggedIn: boolean) => void
    ): Unsubscribe {
        return onAuthStateChanged(this.authService, (user) => {
            if (user) {
                updateLoginStatus(true)
            } else {
                updateLoginStatus(false)
            }
        })
    }
}
