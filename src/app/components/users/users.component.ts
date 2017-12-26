import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { UsersActions } from './users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  name = 'Youtube Data'

  @select(state => state.users.names) readonly names$: Observable<number>;

  constructor(private actions: UsersActions) { }


}
