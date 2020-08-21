import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaDirective, InputDirective } from './input';
import { BtnStrokedDirective, BtnDirective } from './btn';
import { BtnFlatDirective } from './btn/btn-flat.directive';

@NgModule({
  declarations: [BtnDirective, BtnStrokedDirective, InputDirective, TextareaDirective, BtnFlatDirective],
  imports: [
    CommonModule,
  ],
  exports: [BtnDirective, BtnStrokedDirective, InputDirective, TextareaDirective, BtnFlatDirective],
})
export class DirectivesModule { }
