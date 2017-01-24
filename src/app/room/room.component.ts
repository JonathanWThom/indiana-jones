import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user.model';
import { Room } from '../room.model';
import { Router } from '@angular/router';
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
  optionOne: number = null;
  optionTwo: number = null;
  death: boolean = false;
  gameOver: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private userService: UserService, private roomService: RoomService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.users = this.userService.getUsers();
      this.roomId = parseInt(urlParametersArray['id']);
      this.roomToDisplay = this.roomService.getRoomById(this.roomId);
      this.userService.healthMath(this.roomToDisplay.userEffect);
      this.optionOne = this.roomToDisplay.optionOne;
      this.optionTwo = this.roomToDisplay.optionTwo;
      if (this.users[0].health <= 0) {
        this.death = true;
        this.gameOver = true;
      }
      if (this.roomToDisplay.id === 15) {
        this.gameOver = true;
      }
    });
  }

  goToNextRoom(nextRoomId: number) {
    console.log("Next room id:" +  nextRoomId);
    this.router.navigate(['room', nextRoomId]);
  }

  returnHome() {
    this.userService.removeUser(this.users[0]);
    this.router.navigate(['']);
  }

}
