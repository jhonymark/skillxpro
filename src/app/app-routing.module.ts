import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'starter-screen', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'home-main',
    loadChildren: () => import('./home-main/home-main.module').then( m => m.HomeMainPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'starter-screen',
    loadChildren: () => import('./starter-screen/starter-screen.module').then( m => m.StarterScreenPageModule)
  },  {
    path: 'browse-course',
    loadChildren: () => import('./browse-course/browse-course.module').then( m => m.BrowseCoursePageModule)
  },
  {
    path: 'popular-course',
    loadChildren: () => import('./popular-course/popular-course.module').then( m => m.PopularCoursePageModule)
  },
  {
    path: 'browse-cat',
    loadChildren: () => import('./browse-cat/browse-cat.module').then( m => m.BrowseCatPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'my-courses',
    loadChildren: () => import('./my-courses/my-courses.module').then( m => m.MyCoursesPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
