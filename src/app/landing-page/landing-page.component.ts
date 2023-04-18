import { Component } from "@angular/core"
import { ThemeDataService } from "../services/theme-data.service"
import { Theme } from "../models/Theme"

@Component({
    selector: "app-landing-page",
    templateUrl: "./landing-page.component.html",
    styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent {
    constructor(private themeDataService: ThemeDataService) {}

    themes: Theme[] = this.themeDataService.quizThemes
    selectedTheme!: number

    onSelectTheme(event: any): void {
        this.selectedTheme = event.target.id
    }

    checkData():void {
      console.log(this.selectedTheme)
    }
}
