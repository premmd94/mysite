import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.count-bar').animate({
          width: jQuery(this).attr('data-percent')
      }, 3000);
      var percent = jQuery(this).attr('data-percent');
      jQuery(this).find('.count').html('<span>' + percent + '</span>');
      });
      $("span.pink_color").on("click", function () {
        $("body").addClass("pink_color_theme").removeClass("green_color_theme red_color_theme yellow_color_theme purple_color_theme blue_color_theme");
    });
    });
    $(function(){
      new WOW().init();
    });
    $(function(){
      $('.author-image img').addClass('wow fadeInDown');

    });
    
  }

}
