import { Component } from "@angular/core"
import { ThemeDataService } from "../../services/theme-data.service"
import { Theme } from "../../models/Theme"
import { Router } from "@angular/router"

@Component({
    selector: "app-landing-page",
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent {
    constructor(
        private themeDataService: ThemeDataService,
        private router: Router
    ) {}

    themes: Theme[] = this.themeDataService.quizThemes
    isLoginModalDisplayed: boolean = false

    toggleLoginModal(): void {
        this.isLoginModalDisplayed = !this.isLoginModalDisplayed
    }
}
