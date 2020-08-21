import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ExperienceItem } from '../model';

@Injectable()
export class ExperienceService {

  selectedItemSubject = new BehaviorSubject<ExperienceItem>(undefined);
  selectedItem$: Observable<ExperienceItem> = this.selectedItemSubject.asObservable();

  constructor() { }

  getExperience(): Observable<ExperienceItem[]> {
    console.log('experience service');
    return of(mockExperience());
  }
}

function mockExperience(): ExperienceItem[] {
  return [
    {
      displayName: 'GiGLobal',
      fullName: 'GiGLobal',
      img: 'assets/resources/employers/buscojobs.jpg',
      rol: 'Full stack developer',
      web: 'https://www.buscojobs.com.uy/',
      periodOfTime: [{ from: '12/2011', to: '04/2012' }],
      area: `Recruitment and businesses`,
      projects: [
        {
          name: 'JiGlobalJob',
          area: `Businesses`,
          location: 'Uruguay',
          img: 'assets/resources/employers/giglobaljob.jpg',
        },
        {
          name: 'Buscojobs',
          area: `Recruitment`,
          location: 'Uruguay',
          img: 'assets/resources/employers/buscojobs.jpg',
        }
      ],
      technologies: ['C#', 'javascript', 'Python', 'XML'],
      location: 'Uruguay'
    },
    {
      displayName: 'StConsultores',
      fullName: 'StConsultores',
      img: 'assets/resources/employers/st.jpg',
      rol: 'Full stack developer',
      web: 'http://www.st.com.uy/st/es/8/inicio',
      periodOfTime: [{ from: '10/2013', to: '08/2015' }],
      area: `Software & Telecommunications `,
      projects: [
        {
          name: 'BPS',
          area: `Social security bank`,
          location: 'Uruguay',
          web: 'https://www.bps.gub.uy/',
          img: 'assets/resources/employers/bps.png',
        }
      ],
      technologies: ['C#', 'javascript', 'MVC', 'WCF', 'PL/SQL', 'Visual Basic', 'Web Services', 'SOAP'],
      location: 'Uruguay'
    },
    {
      displayName: 'TCS',
      fullName: 'Tata Consultancy and Services',
      img: 'assets/resources/employers/tcs.jpg',
      rol: 'Full stack developer & Technical Lead',
      web: 'https://www.tcs.com/',
      periodOfTime: [{ from: '04/2012', to: '04/2013' }, { from: '08/2015', to: '05/2016' }],
      area: `Consultancy and Services`
      ,
      projects: [
        {
          name: 'Price Waterhouse Coopers',
          area: `Consultancy`,
          location: 'United State',
          web: 'https://www.pwc.com/',
          img: 'assets/resources/employers/pwc.jpg',
        },
      ],
      technologies: ['C#', 'javascript', 'WCF', 'SQL Server', 'VBA', 'Waterfall', 'HP ALM'],
      location: 'Uruguay'
    },
    {
      displayName: 'Kaizen',
      fullName: 'Kaizen Softworks',
      img: 'assets/resources/employers/kaizen.png',
      rol: 'Sr. Full Stack Developer',
      web: 'https://kzsoftworks.com/',
      periodOfTime: [{ from: '05/16', to: '02/19' }],
      area: `Software Consultancy and Services`,
      projects: [
        {
          name: 'Infocorp',
          area: `Banking`,
          location: 'Uruguay - Honduras',
          web: 'https://www.pwc.com/',
          img: 'assets/resources/employers/infocorp.png',
        },
        {
          name: 'Blueport',
          area: `ECommerce`,
          location: 'United State',
          web: 'https://www.blueport.com/',
          img: 'assets/resources/employers/blueport-commerce.png',
        },
        {
          name: 'Smartborder',
          area: `Assurance and logistics coordination`,
          location: 'United State',
          web: 'https://www.smartborder.com/',
          img: 'assets/resources/employers/smart-border.jpg',
        }
      ],
      technologies: ['C#', 'Angular 2+', 'AngularJs', 'javascript', 'MVC', 'SQL Server', 'Agile', 'Azure devops', 'Jira'],
      location: 'Uruguay'
    },
    {
      displayName: 'Overactive',
      fullName: 'Overactive',
      img: 'assets/resources/employers/overactive.jpg',
      rol: 'Sr. Full Stack Developer',
      web: 'https://www.overactive.com/home',
      periodOfTime: [{ from: '02/19', to: 'Current work' }],
      area: `Software Consultancy and Services `,
      projects: [
        {
          name: 'XPO Logistics',
          area: `Logistics`,
          location: 'United State',
          web: 'https://www.xpo.com/',
          img: 'assets/resources/employers/xpo.jpg',
        }
      ],
      technologies: ['Angular 2+', 'javascript', 'Agile', 'Jira'],
      location: 'Uruguay'
    },
  ];
}
