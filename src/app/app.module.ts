import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { FoundersComponent } from "./founders/founders.component";
import { BlogComponent } from "./blog/blog.component";
import { ClientsComponent } from "./clients/clients.component";
import { LandingComponent } from "./landing/landing.component";
import { FooterComponent } from "./footer/footer.component";
import { SkillsComponent } from "./skills/skills.component";
import { AboutComponent } from "./about/about.component";
import { StrategyComponent } from "./strategy/strategy.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { TeamComponent } from "./team/team.component";
import { HomeComponent } from "./home/home.component";
import { ChatComponent } from "./chatbot/chat.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { OurTeamComponent } from "./our-team/our-team.component";
import { PortfolioPageComponent } from "./portfolio-page/portfolio-page.component";
import { RegistrationPageComponent } from "./registration-page/registration-page.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FoundersComponent,
    BlogComponent,
    TeamComponent,
    ClientsComponent,
    LandingComponent,
    FooterComponent,
    SkillsComponent,
    AboutComponent,
    StrategyComponent,
    PortfolioComponent,
    RegistrationPageComponent,
    ChatComponent,
    HomeComponent,
    OurTeamComponent,
    PortfolioPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
