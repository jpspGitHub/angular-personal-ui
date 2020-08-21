import { ExperienceService } from './services/experience.service';
import { SkillService } from './services/skill.service';
import { CoreModule } from './../core/core.module';
import { FrameworkModule } from './../framework/framework.module';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { EducationComponent } from './components/education/education.component';
import { RecommendationService } from './services/recommendation.service';
import { EducationService } from './services/education.service';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillAreaPipe } from './pipes/skill.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { MenuService } from './services/menu.service';
import { ExperienceHeaderComponent } from './components/experience-header/experience-header.component';
import { ExperienceDetailComponent } from './components/experience-detail/experience-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ServicesComponent,
    AboutComponent,
    MainMenuComponent,
    ExperienceComponent,
    RecommendationComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    SkillAreaPipe,
    ExperienceHeaderComponent,
    ExperienceDetailComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FrameworkModule,
    WebsiteRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    SkillService,
    ExperienceService,
    RecommendationService,
    EducationService,
    MenuService,
  ]
})
export class WebsiteModule { }


