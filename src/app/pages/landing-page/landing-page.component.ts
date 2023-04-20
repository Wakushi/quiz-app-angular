import { Component, OnInit, OnDestroy } from "@angular/core"
import { ThemeDataService } from "../../services/theme-data.service"
import { Theme } from "../../models/Theme"
import { Router } from "@angular/router"
import { QuestionsService } from "src/app/services/questions.service"
import { LoginService } from "src/app/services/login.service"
import { Unsubscribe } from "firebase/auth"

@Component({
    selector: "app-landing-page",
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit, OnDestroy {
    constructor(
        private themeDataService: ThemeDataService,
        private router: Router,
        private questionsService: QuestionsService,
        private loginService: LoginService
    ) {}

    private unsubscribeAuth!: Unsubscribe
    isUserLogged: boolean = true
    themes: Theme[] = this.themeDataService.quizThemes
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

    toggleLoginModal(): void {
        this.isLoginModalDisplayed = !this.isLoginModalDisplayed
    }

    onSelectTheme(event: any): void {
        if (this.isUserLogged) {
            this.questionsService.onSelectTheme(event.target.id)
            this.questionsService.getQuestionsData()
            this.router.navigateByUrl("question")
        } else {
            this.toggleLoginModal()
        }
    }
}
