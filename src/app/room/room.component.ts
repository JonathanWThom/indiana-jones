import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user.model';
import { Room } from '../room.model';
import { UserService } from '../user.service';
import { RoomService } from '../room.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [UserService, RoomService]
})
export class RoomComponent implements OnInit {
  roomId: number = null;
  users: User[];
  roomToDisplay: Room;
  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService, private roomService: RoomService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.route.params.forEach((urlParametersArray) => {
      this.roomId = parseInt(urlParametersArray['id']);
    });
    this.roomToDisplay = this.roomService.getRoomById(this.roomId);

  }

}
