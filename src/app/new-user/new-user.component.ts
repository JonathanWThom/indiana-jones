import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [UserService]
})
export class NewUserComponent{
  @Output() newUserSender = new EventEmitter();
  constructor(private userService: UserService) {}

  makeUser(name: string, profession: string, gender: string) {
    var newUser: User = new User(name, profession, gender);
    this.newUserSender.emit();
    this.userService.addUser(newUser);
  }

}
