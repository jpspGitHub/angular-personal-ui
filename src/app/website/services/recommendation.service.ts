import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Recommendation } from '../model';

@Injectable()
export class RecommendationService {

  constructor() { }

  getRecommendations(): Observable<Recommendation[]> {
    return of(mockRecommendations());
  }
}

export function mockRecommendations(): Recommendation[] {
  return [
    {
      name: 'Federico Agustin Areas',
      position: 'Frontend Developer at Darwoft',
      img: 'assets/resources/avatars/recommendation-1.jpg',
      description: `Pablo and I were working on the same team for a couple of
        weeks and then started to work in different teams but still collaborating between us.
        He's a committed professional, always focused on code quality, his contributions to
        the team helped to improve the technical quality of the final product. Personally
        taught me a lot about achieving easy-readable and easy-understandable code.
        He also has strong interpersonal skills and empathy with client and co-workers,
        Pablo is someone that surely add value to the team.`
    },
    {
      name: 'Mauricio Gaviria',
      position: 'Software Engineer at BlueCart, Inc.',
      img: 'assets/resources/avatars/recommendation-2.jpg',
      description: `He tenido el placer de trabajar con Pablo lo largo de un año en un proyecto de software grande,
        complejo y desafiante. Es muy fácil trabajar con Pablo y siempre toma la rendición de cuentas y la
        responsabilidad por cualquier trabajo que se le ha asignado. Él ha tenido que asumir la propiedad de
        varias piezas de código aunque que no fuera las que él escribió. Siempre ha trabajado con entusiasmo para
        solucionar los problemas que enfrena. Recomiendo altamente a Pablo para cualquier trabajo de desarrollo de software`
    },
    {
      name: 'Gonzalo Bonfrisco',
      position: 'Developer Chef, Software Developer (GICLA - WIS), Teacher (UDELAR)',
      img: 'assets/resources/avatars/recommendation-3.jpg',
      description: `Estudiante atento y esforzado, destacado dentro de su generación.
      Buena disposición para trabajar en grupos y con sus pares. Un placer tenerlo como alumno.`
    },
    {
      name: 'Marcos Olivera',
      position: 'Full Stack Senior Developer at SoftEdge Technologies US',
      img: 'assets/resources/avatars/recommendation-4.jpg',
      description: `I have worked with Pablo for almost two years and in that time he showed an incredible excellence technically
      and professional, dedication to the project and to the understanding of the client business and needs.
      I would like to recommend him as an excellent developer that worth work with.`
    },
  ];
}
