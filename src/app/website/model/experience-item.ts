import { ExperienceProjectItem } from './experience-project-item';

export class ExperienceItem {
  displayName: string;
  fullName: string;
  img: string;
  web: string;
  rol: string;
  area: string;
  periodOfTime: { from: string, to: string }[];
  selected?: boolean;
  projects: ExperienceProjectItem[];
  technologies: string[];
  location: string;
}
