import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule } from "@angular/forms"
import { HeaderComponent } from "./header/header.component"
import { LandingPageComponent } from "./landing-page/landing-page.component"
import { QuestionnaryComponent } from "./questionnary/questionnary.component"
import { HttpClientModule } from "@angular/common/http"
import { QuestionSetComponent } from "./question-set/question-set.component"
import { MatButtonToggleModule } from "@angular/material/button-toggle"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LandingPageComponent,
        QuestionnaryComponent,
        QuestionSetComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatButtonToggleModule,
        MatProgressSpinnerModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
