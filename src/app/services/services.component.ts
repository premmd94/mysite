import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { slideInOutAnimation } from '../animations/slide-in.animatios';
declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class ServicesComponent implements OnInit {
  services: FirebaseListObservable<any[]>;
  whatido: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.services = db.list('/services/service');
    this.whatido = db.list('/services/whatido');
  }

  ngOnInit() {
    $(function(){
      new WOW().init();
      $('.services-section').addClass("wow fadeInUp");
    });
  }

}
