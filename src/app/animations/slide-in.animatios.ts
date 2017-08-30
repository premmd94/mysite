import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation = 

trigger('slideInOutAnimation', [
    state('void', style({position:'absolute', width:'100%'}) ),
    state('*', style({position:'absolute', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('1s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('1s ease-in-out', style({transform: 'translateY(-100%)'}))
    ])
  ]);
    // trigger('slideInOutAnimation', [

    //     state('*', style({
    //         position: 'relative',
    //         top: 0,
    //         left: 0,
    //         right: 0,
    //         bottom: 0,
    //     })),

    //     transition(':enter', [

    //         style({
    //             right: '-400%'

    //         }),

    //         animate('.5s ease-in-out', style({
    //             right: 0

    //         }))
    //     ]),

    //     transition(':leave', [
    //         animate('.5s ease-in-out', style({
    //             right: '-400%'

    //         }))
    //     ])
    // ]);