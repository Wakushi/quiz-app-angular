import { Component, Input } from "@angular/core"
import { Router } from "@angular/router"

@Component({
    selector: "app-profile-picture-frame",
    templateUrl: "./profile-picture-frame.component.html",
    styleUrls: ["./profile-picture-frame.component.scss"],
})
export class ProfilePictureFrameComponent {
    @Input() size!: string
    constructor(private router: Router) {}

    onClickProfile(): void {
        this.router.navigateByUrl("profile")
    }
}
