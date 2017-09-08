import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { slideInOutAnimation } from '../animations/slide-in.animatios';
declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '' }
})
export class YoutubeComponent implements OnInit {

  youtube: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.youtube = db.list('/youtube');
  }

  ngOnInit() {
  }

}
