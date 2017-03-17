import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './notfound.component';

import {routing} from './app.routing';
import {spotifyRouting} from './spotify/spotify.routing';
import {userRouting} from './users/user.routing';

import {LoginComponent} from './login.component';
import {SearchComponent} from './search.component';

import {SpotifyModule} from './spotify/spotify.module';
import {UserModule} from './users/user.module';

import {LoginService} from './login.service';
import {AuthGuard} from './auth-guard.service';
import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SpotifyModule,
    UserModule,
    spotifyRouting,
    userRouting,
    routing
  ],
  providers: [
    LoginService,
    AuthGuard,
    PreventUnsavedChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
