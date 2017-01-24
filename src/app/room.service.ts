import { Injectable } from '@angular/core';
import { Room } from './room.model';
import { ROOMS } from './mock-rooms';


@Injectable()
export class RoomService {

  constructor() { }

  getRoomById(roomId: number){
    for (var i = 0; i <= ROOMS.length - 1; i++) {
      if (ROOMS[i].id === roomId) {
        return ROOMS[i];
      }
    }
  }
}
