import { Component, OnInit } from "@angular/core"
import { Auth, User, getAuth, updateProfile } from "@angular/fire/auth"
import { UserService } from "src/app/services/user.service"
import { Observable } from "rxjs"

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
    constructor(private userService: UserService) {}

    currentUsername$: Observable<User | null> = this.userService.user$
    newUserName!: string
    isEditingName: boolean = false

    ngOnInit(): void {}

    toggleNameEditing(): void {
        this.isEditingName = !this.isEditingName
        if (!this.isEditingName) {
            this.userService.updateDisplayName(this.newUserName)
        }
    }

    checkData(): void {
        console.log(this.newUserName)
        console.log(getAuth().currentUser)
    }
}
