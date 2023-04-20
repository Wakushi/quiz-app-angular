import { Component } from "@angular/core"
import { ThemeDataService } from "../../services/theme-data.service"
import { Theme } from "../../models/Theme"
import { QuestionsService } from "../../services/questions.service"
import { Router } from "@angular/router"

@Component({
    selector: "app-landing-page",
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent {
    constructor(
        private themeDataService: ThemeDataService,
        private questionsService: QuestionsService,
        private router: Router
    ) {}

    themes: Theme[] = this.themeDataService.quizThemes
    isLoginModalDisplayed: boolean = false

    onSelectTheme(event: any): void {
        this.questionsService.onSelectTheme(event.target.id)
        this.questionsService.getQuestionsData()
        this.router.navigateByUrl("question")
    }

    toggleLoginModal(): void {
        this.isLoginModalDisplayed = !this.isLoginModalDisplayed
    }
}
