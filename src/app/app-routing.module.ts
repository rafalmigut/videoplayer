import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {VideosComponent} from './videos/videos.component';
import {AuthGuardService} from './auth-guard.service';
import {VideoDetailsComponent} from './video-details/video-details.component';
import {VideosListComponent} from './videos-list/videos-list.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/videos', pathMatch: 'full'},
  {path: 'videos', component: VideosComponent, canActivate: [AuthGuardService], children: [
      {path: 'list', component: VideosListComponent}
    ]},
  {path: 'video/:id', component: VideoDetailsComponent, canActivate: [AuthGuardService]},
  {path: 'signin', component: SigninComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
