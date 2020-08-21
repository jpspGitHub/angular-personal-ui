import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BaseBtnDirective } from 'src/app/core/directives';

@Directive({
  selector: '[jps-btn-stroked]'
})
export class BtnStrokedDirective extends BaseBtnDirective {

  constructor(public el: ElementRef, public renderer: Renderer2) {
    super();
  }

  setClass(): void {
    this.renderer.addClass(this.el.nativeElement, 'jps-btn');
    this.renderer.addClass(this.el.nativeElement, 'jps-btn-stroked');
  }
}
