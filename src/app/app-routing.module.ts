import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LandingPageComponent } from "./landing-page/landing-page.component"
import { QuestionnaryComponent } from "./questionnary/questionnary.component"

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
