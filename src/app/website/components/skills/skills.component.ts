import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Observable } from 'rxjs';
import { Skill } from '../../model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'jps-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  skillsGroups$: Observable<Skill[][]> = this.skillService
    .getSkills()
    .pipe(
      map(
        (skills) => {
          let current = skills[0];
          let result: Skill[][] = [[]];
          for (const item of skills) {
            if (item.area !== current.area) {
              result = [...result, []];
              current = item;
            }

            result[result.length - 1] = [...result[result.length - 1], item];
          }

          return result;
        }
      )
    );

  constructor(protected skillService: SkillService) { }

  ngOnInit(): void {
  }


}
