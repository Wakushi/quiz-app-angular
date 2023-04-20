// UTILS
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "./app-routing.module"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"

// COMPONENTS
import { AppComponent } from "./app.component"
import { HeaderComponent } from "./components/header/header.component"
import { LandingPageComponent } from "./pages/landing-page/landing-page.component"
import { QuestionnaryComponent } from "./pages/questionnary/questionnary.component"
import { QuestionSetComponent } from "./components/question-set/question-set.component"

// MATERIAL
import { MatButtonToggleModule } from "@angular/material/button-toggle"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { LoginComponent } from "./login/login.component"

// FIREBASE
import { initializeApp, provideFirebaseApp } from "@angular/fire/app"
import { provideAuth, getAuth } from "@angular/fire/auth"
import { provideDatabase, getDatabase } from "@angular/fire/database"

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LandingPageComponent,
        QuestionnaryComponent,
        QuestionSetComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MatButtonToggleModule,
        MatProgressSpinnerModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
