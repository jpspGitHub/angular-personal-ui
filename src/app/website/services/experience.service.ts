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
      displayName: 'Buscojobs',
      fullName: 'Buscojobs',
      img: 'assets/resources/employers/buscojobs.jpg',
      position: 'Full stack developer',
      web: 'https://www.buscojobs.com.uy/',
      periodOfTime: [{ from: '01/01', to: '01/01' }],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
    delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
    iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
      projects: [
        {
          name: 'JiGlobalJob',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
          location: 'Uruguay',
          img: 'assets/resources/employers/giglobaljob.jpg',
        },
        {
          name: 'Buscojobs',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
          location: 'Uruguay',
          img: 'assets/resources/employers/buscojobs.jpg',
        }
      ],
      technologies: ['C#', 'javascript'],
      location: 'Uruguay'
    },
    {
      displayName: 'StConsultores',
      fullName: 'StConsultores',
      img: 'assets/resources/employers/st.jpg',
      position: 'Full stack developer',
      web: 'http://www.st.com.uy/st/es/8/inicio',
      periodOfTime: [{ from: '01/01', to: '01/01' }],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
    delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
    iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
      projects: [
        {
          name: 'BPS',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
          location: 'Uruguay',
          web: 'https://www.bps.gub.uy/',
          img: 'assets/resources/employers/bps.png',
        }
      ],
      technologies: ['C#', 'javascript', 'MVC', 'WCF', 'PL/SQL', 'Visual Basic'],
      location: 'Uruguay'
    },
    {
      displayName: 'TCS',
      fullName: 'Tata Consultancy and Services',
      img: 'assets/resources/employers/tcs.jpg',
      position: 'Full stack developer & Technical Lead',
      web: 'https://www.tcs.com/',
      periodOfTime: [{ from: '01/01', to: '01/01' }, { from: '01/01', to: '01/01' }],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
    delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
    iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
      projects: [
        {
          name: 'Price Waterhouse Coopers',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
          location: 'United State',
          web: 'https://www.pwc.com/',
          img: 'assets/resources/employers/pwc.jpg',
        },
      ],
      technologies: ['C#', 'javascript', 'WCF', 'SQL Server', 'VBA', 'Waterfall', 'HP ALM'],
      location: 'Montevideo - Uruguay'
    },
    {
      displayName: 'Kaizen',
      fullName: 'Kaizen Softworks',
      img: 'assets/resources/employers/kaizen.png',
      position: 'Sr. Full Stack Developer',
      web: 'https://kzsoftworks.com/',
      periodOfTime: [{ from: '01/01', to: '01/01' }],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
    delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
    iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
      projects: [
        {
          name: 'Infocorp',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
          location: 'Uruguay - Honduras',
          web: 'https://www.pwc.com/',
          img: 'assets/resources/employers/infocorp.png',
        },
        {
          name: 'Blueport',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
          location: 'United State',
          web: 'https://www.blueport.com/',
          img: 'assets/resources/employers/blueport-commerce.png',
        },
        {
          name: 'Smartborder',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
          location: 'United State',
          web: 'https://www.smartborder.com/',
          img: 'assets/resources/employers/smart-border.jpg',
        }
      ],
      technologies: ['C#', 'Angular 2+', 'AngularJs', 'javascript', 'MVC', 'SQL Server', 'Agile', 'Azure devops', 'Jira'],
      location: 'Montevideo - Uruguay'
    },
    {
      displayName: 'Overactive',
      fullName: 'Overactive',
      img: 'assets/resources/employers/overactive.jpg',
      position: 'Sr. Full Stack Developer',
      web: 'https://www.overactive.com/home',
      periodOfTime: [{ from: '01/01', to: '01/01' }],
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
    delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
    iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
      projects: [
        {
          name: 'XPO Logistics',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo,
delectus architecto fuga reprehenderit est, deserunt natus nam dolores distinctio sint
iste. Quae explicabo neque quidem reprehenderit sed rerum ab!`,
          location: 'United State',
          web: 'https://www.xpo.com/',
          img: 'assets/resources/employers/xpo.jpg',
        }
      ],
      technologies: ['Angular 2+', 'javascript', 'Agile', 'Jira'],
      location: 'Montevideo - Uruguay'

    },
  ];
}
