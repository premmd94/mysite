import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation = 

trigger('slideInOutAnimation', [
    state('void', style({position:'absolute', width:'100%'}) ),
    state('*', style({position:'absolute', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
    ])
  ]);