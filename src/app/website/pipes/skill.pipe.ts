import { Pipe, PipeTransform } from '@angular/core';
import { SkillArea } from '../enums';

@Pipe({
  name: 'skillArea'
})
export class SkillAreaPipe implements PipeTransform {

  transform(value: SkillArea, ...args: unknown[]): string {
    switch (value) {
      case SkillArea.LANGUAGES:
        return 'Software languages';
      case SkillArea.TESTING:
        return 'Testing';
      case SkillArea.DATABASE:
        return 'Database';
      case SkillArea.TECHNOLOGY:
        return 'Technology';
      case SkillArea.AREAS:
        return 'Areas';
    }
  }

}
