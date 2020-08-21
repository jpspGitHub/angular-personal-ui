import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from './directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SectionContainerComponent } from './components/section-container/section-container.component';
import { SkillIndicatorComponent } from './components/skill-indicator/skill-indicator.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { InputComponent } from './components/input/input.component';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { FormsModule } from '@angular/forms';
import { FormErrorPipe } from './pipes/form-error.pipe';

@NgModule({
  declarations: [
    SectionContainerComponent,
    SkillIndicatorComponent,
    AvatarComponent,
    InputComponent,
    FormErrorsComponent,
    FormErrorPipe
  ],
  imports: [
    CommonModule,
    CoreModule,
    DirectivesModule,
    FlexLayoutModule,
    FormsModule,
  ],
  exports: [
    DirectivesModule,
    SectionContainerComponent,
    SkillIndicatorComponent,
    AvatarComponent,
    InputComponent,
    FormErrorsComponent,
    FormErrorPipe
  ]
})
export class FrameworkModule { }
