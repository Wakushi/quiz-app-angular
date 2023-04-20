import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LandingPageComponent } from "./pages/landing-page/landing-page.component"
import { QuestionnaryComponent } from "./pages/questionnary/questionnary.component"
import { CategoriesComponent } from "./pages/categories/categories.component"
import { ProfileComponent } from "./pages/profile/profile.component"

const routes: Routes = [
    {
        path: "",
        component: LandingPageComponent,
    },
    {
        path: "question",
        component: QuestionnaryComponent,
    },
    {
        path: "categories",
        component: CategoriesComponent,
    },
    {
        path: "profile",
        component: ProfileComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
