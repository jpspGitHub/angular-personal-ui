import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'jps-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AvatarComponent implements OnInit {

  @Input() addBrand = false;
  @Input() alignMiddle = false;
  constructor() { }

  ngOnInit(): void {
  }

}
