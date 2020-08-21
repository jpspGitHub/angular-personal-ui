import { Skill } from '../../../website/model/skill';
import { Component, OnInit, Input } from '@angular/core';
import { SkillLevel } from 'src/app/website/enums';
import { enumToArray } from 'src/app/core/functions';

@Component({
  selector: 'jps-skill-indicator',
  templateUrl: './skill-indicator.component.html',
  styleUrls: ['./skill-indicator.component.scss']
})
export class SkillIndicatorComponent implements OnInit {

  @Input() skill: Skill;
  @Input() mode: 'percentage' | 'rating' = 'percentage';
  constructor() { }

  ngOnInit(): void {
  }

  get startLevels() {
    return enumToArray(SkillLevel);
  }

}
