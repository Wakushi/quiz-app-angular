import {
    Auth,
    getAuth,
    onAuthStateChanged,
    updateProfile,
    User,
} from "@angular/fire/auth"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

@Injectable({
    providedIn: "root",
})
export class UserService {
    user$: Observable<User | null> = new Observable((subscriber) => {
        onAuthStateChanged(getAuth(), (user) => subscriber.next(user))
    })

    constructor(private afAuth: Auth) {}

    async updateDisplayName(displayName: string): Promise<void> {
        try {
            const auth = getAuth()
            const user = auth.currentUser

            if (user) {
                await updateProfile(user, { displayName })
            }
        } catch (error) {
            console.error("Error updating display name:", error)
        }
    }
}
