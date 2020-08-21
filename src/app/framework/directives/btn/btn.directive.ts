import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BaseBtnDirective } from '../../../core/directives/base-btn.directive';

@Directive({
  selector: '[jps-btn]'
})
export class BtnDirective extends BaseBtnDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) {
    super();
  }

  setClass(): void {
    this.renderer.addClass(this.el.nativeElement, 'jps-btn');
  }

}
