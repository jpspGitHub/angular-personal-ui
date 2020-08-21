import { Input, OnInit } from '@angular/core';

export abstract class BaseBtnDirective implements OnInit {

  @Input() color: 'primary' | 'secondary';

  abstract setClass(): void;

  ngOnInit(): void {
    this.setClass();
  }
}
