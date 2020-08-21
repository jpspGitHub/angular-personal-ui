import { Injectable } from '@angular/core';
import { BaseSectionComponent } from '../component/base-section.component';
import { MenuAction } from 'src/app/website/enums';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private sections: BaseSectionComponent[] = [];
  constructor() { }


  addSection(section: BaseSectionComponent) {
    this.sections.push(section);
  }

  goToSection(action: MenuAction) {
    const section = this.sections.find(s => s.action === action);
    document.getElementById(`section_${section.action}`).scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }
}
