import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../states/app.state';
import { userReducer } from './user.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducer
};
