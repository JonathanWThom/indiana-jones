import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS } from './mock-users';

@Injectable()
export class UserService {

  constructor() { }

  getUsers() {
    return USERS;
  }

  addUser(newUser: User) {
    USERS.push(newUser);
  }
  healthMath(userEffect: number) {
    USERS[0].health += userEffect;
  }
}
