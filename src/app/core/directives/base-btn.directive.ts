import { Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

export abstract class BaseBtnDirective implements OnInit {

  @Input() color: 'primary' | 'secondary' | 'light' = 'primary';

  constructor(public el: ElementRef, public renderer: Renderer2) { }
  abstract setClass(): void;

  ngOnInit(): void {
    this.setClass();
    this.renderer.addClass(this.el.nativeElement, this.color);
  }
}
