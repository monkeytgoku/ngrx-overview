import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';

import { EUserActions, GetUsers, GetUsersSuccess } from '../actions/user.action';

@Injectable()
export class UserEffect {
  @Effect()
  getUser$ = this.action$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap(users => of(new GetUsersSuccess(users)))
  );

  constructor(
    private userService: UserService,
    private action$: Actions
  ) {}
}
