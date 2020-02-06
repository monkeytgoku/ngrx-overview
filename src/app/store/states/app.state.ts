import { IUserState, initialUserState } from './user.state';
import { RouterReducerState } from '@ngrx/router-store';


export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
}

export const initialAppState: IAppState = {
  users: initialUserState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
