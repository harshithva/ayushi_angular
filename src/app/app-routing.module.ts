import { OurTeamComponent } from "./our-team/our-team.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortfolioPageComponent } from "./portfolio-page/portfolio-page.component";
import { RegistrationPageComponent } from "./registration-page/registration-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "team", component: OurTeamComponent },
  { path: "portfolio", component: PortfolioPageComponent },
  // { path: "register", component: RegistrationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
