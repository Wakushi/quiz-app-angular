import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { Theme } from "src/app/models/Theme"
import { QuestionsService } from "src/app/services/questions.service"
import { ThemeDataService } from "src/app/services/theme-data.service"

@Component({
    selector: "app-categories",
    templateUrl: "./categories.component.html",
    styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
    constructor(
        private themeDataService: ThemeDataService,
        private questionsService: QuestionsService,
        private router: Router
    ) {}

    themes: Theme[] = this.themeDataService.quizThemes

    onSelectTheme(event: any): void {
        this.questionsService.onSelectTheme(event.target.id)
        this.questionsService.getQuestionsData()
        this.router.navigateByUrl("question")
    }
}
