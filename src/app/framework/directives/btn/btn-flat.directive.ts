import { Directive, Renderer2, ElementRef } from '@angular/core';
import { BaseBtnDirective } from 'src/app/core/directives';

@Directive({
  selector: '[jps-btn-flat]'
})
export class BtnFlatDirective extends BaseBtnDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) {
    super();
  }

  setClass(): void {
    this.renderer.addClass(this.el.nativeElement, 'jps-btn');
    this.renderer.addClass(this.el.nativeElement, 'jps-btn-flat');
  }
}
