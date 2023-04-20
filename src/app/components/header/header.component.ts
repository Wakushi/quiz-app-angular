import { Component, OnInit, OnDestroy } from "@angular/core"
import { Router } from "@angular/router"
import { LoginService } from "src/app/services/login.service"
import { Unsubscribe } from "firebase/auth"

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
    constructor(private router: Router, private loginService: LoginService) {}
    private unsubscribeAuth!: Unsubscribe
    isUserLogged!: boolean
    isLoginModalDisplayed: boolean = false

    ngOnInit(): void {
        this.unsubscribeAuth = this.loginService.initAuthListener(
            (loggedIn) => {
                this.isUserLogged = loggedIn
            }
        )
    }

    ngOnDestroy(): void {
        if (this.unsubscribeAuth) {
            this.unsubscribeAuth()
        }
    }

    onLogOut(): void {
        this.loginService.logOut()
        this.router.navigateByUrl("")
    }

    toggleLoginModal(): void {
        this.isLoginModalDisplayed = false
    }
}
