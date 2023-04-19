import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LandingPageComponent } from "./pages/landing-page/landing-page.component"
import { QuestionnaryComponent } from "./pages/questionnary/questionnary.component"

const routes: Routes = [
    {
        path: "",
        component: LandingPageComponent,
    },
    {
        path: "question",
        component: QuestionnaryComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
