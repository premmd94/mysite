import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../animations/slide-in.animatios';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
