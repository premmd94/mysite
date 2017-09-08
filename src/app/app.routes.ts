import { Routes } from '@angular/Router';
import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { YoutubeComponent } from'./youtube/youtube.component';
import { CourseComponent } from'./course/course.component';
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
   pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'courses',
    component: CourseComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'works',
    component: WorksComponent
  },
  {
    path: 'youtube',
    component: YoutubeComponent
  },
  {
    path: '**',
    component: DashboardComponent
  }
];
