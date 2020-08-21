import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill } from '../model';
import { SkillLevel, SkillArea } from '../enums';

@Injectable()
export class SkillService {

  constructor() { }


  getSkills(): Observable<Skill[]> {
    return of(mockSkills());
  }
}


function mockSkills(): Skill[] {
  return [
    {
      displayName: 'Javascript',
      percentage: 100,
      level: SkillLevel.VERY_HIGH,
      area: SkillArea.LANGUAGES
    },
    {
      displayName: 'Angular 2+',
      percentage: 100,
      level: SkillLevel.VERY_HIGH,
      area: SkillArea.LANGUAGES
    },
    {
      displayName: 'React',
      percentage: 60,
      level: SkillLevel.MEDIUM,
      area: SkillArea.LANGUAGES
    },
    {
      displayName: 'C#',
      percentage: 80,
      level: SkillLevel.VERY_HIGH,
      area: SkillArea.LANGUAGES
    },
    {
      displayName: 'Node.js',
      percentage: 60,
      level: SkillLevel.MEDIUM,
      area: SkillArea.LANGUAGES
    },
    {
      displayName: 'NUnit',
      percentage: 60,
      level: SkillLevel.HIGH,
      area: SkillArea.TESTING
    },
    {
      displayName: 'MSTest',
      percentage: 60,
      level: SkillLevel.MEDIUM,
      area: SkillArea.TESTING
    },
    {
      displayName: 'Karma',
      percentage: 60,
      level: SkillLevel.HIGH,
      area: SkillArea.TESTING
    },
    {
      displayName: '.Net',
      percentage: 100,
      level: SkillLevel.VERY_HIGH,
      area: SkillArea.TECHNOLOGY
    },
    {
      displayName: 'net core',
      percentage: 100,
      level: SkillLevel.HIGH,
      area: SkillArea.TECHNOLOGY
    },
    {
      displayName: 'SQL Server',
      percentage: 90,
      level: SkillLevel.HIGH,
      area: SkillArea.DATABASE
    },
    {
      displayName: 'Mongo',
      percentage: 60,
      level: SkillLevel.MEDIUM,
      area: SkillArea.DATABASE
    },
    {
      displayName: 'MySql',
      percentage: 60,
      level: SkillLevel.MEDIUM,
      area: SkillArea.DATABASE
    },
    {
      displayName: 'PL/Sql',
      percentage: 60,
      level: SkillLevel.MEDIUM,
      area: SkillArea.DATABASE
    },
    {
      displayName: 'Front-End Developer',
      percentage: 100,
      level: SkillLevel.VERY_HIGH,
      area: SkillArea.AREAS
    },
    {
      displayName: 'Back-End Developer',
      percentage: 100,
      level: SkillLevel.VERY_HIGH,
      area: SkillArea.AREAS
    },
    {
      displayName: 'Agile Methodology',
      percentage: 100,
      level: SkillLevel.HIGH,
      area: SkillArea.AREAS
    },
    {
      displayName: 'Waterfall Methodology',
      percentage: 80,
      level: SkillLevel.HIGH,
      area: SkillArea.AREAS
    },
    {
      displayName: 'Leadership',
      percentage: 70,
      level: SkillLevel.HIGH,
      area: SkillArea.AREAS
    },
  ];
}


