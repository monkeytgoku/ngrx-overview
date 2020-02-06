import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { GetUsers } from '../store/actions/user.action';
import { selectUserList } from '../store/selectors/user.selector';
import { IAppState } from '../store/states/app.state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user$ = this.store.pipe(select(selectUserList));

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
  }
}
