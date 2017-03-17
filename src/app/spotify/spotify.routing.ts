import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SpotifyComponent} from './spotify.component';
import {ArtistComponent} from './artist.component';

import {AuthGuard} from '../auth-guard.service';

export const spotifyRouting = RouterModule.forChild([
  {path: 'spotify', component: SpotifyComponent, canActivate: [AuthGuard]},
  {path: 'spotify/artist/:id/:name', component: ArtistComponent, canActivate: [AuthGuard]}
]);
