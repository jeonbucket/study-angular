import {RouterModule} from '@angular/router';

import {UserFormComponent} from './user-form.component';

import {AuthGuard} from '../auth-guard.service';

export const userRouting = RouterModule.forChild([
  {path: 'signup', component: UserFormComponent, canActivate: [AuthGuard]}
]);
