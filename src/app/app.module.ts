// UTILS
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "./app-routing.module"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"

// COMPONENTS
import { AppComponent } from "./app.component"
import { HeaderComponent } from "./header/header.component"
import { LandingPageComponent } from "./landing-page/landing-page.component"
import { QuestionnaryComponent } from "./questionnary/questionnary.component"
import { QuestionSetComponent } from "./question-set/question-set.component"

// MATERIAL
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
