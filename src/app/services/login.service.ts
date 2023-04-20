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

    async signUp(email: string, password: string): Promise<void> {
        try {
            await createUserWithEmailAndPassword(
                this.authService,
                email,
                password
            )
            this.router.navigateByUrl('categories')
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error)
        }
    }
}
