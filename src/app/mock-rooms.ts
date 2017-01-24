import { Room } from './room.model';

export const ROOMS: Room[] = [
  new Room('Entry Hall', 'This is the entry hall\'s content', 1, 0, 2, 3),
  new Room('Snake Room', 'This room contains snakes. I hate snakes!', 2, -25, 4, 5),
  new Room('Water Room', 'This room is flooded. Hope you can swim!', 3, -10, 6, 7),
  new Room('Dining Room', 'An elegant dining room. Mmm, tasty food!', 4, +15, 0, 0),
  new Room('Chasm Room', 'This room is a bottomless pit. You have plunged to your death.', 5, -200, 0, 0),
  new Room('Egyptian Room', 'This room contains various artifacts. Oh, a rampaging mummy too.', 6, -5, 0, 0),
  new Room('Greenhouse', 'This room contains plants, and lot of em. Some are carnivorous, and some taste good.', 7, 10, 0, 0 )
  // new Room('Throne Room', 'This room contains a big throne, far too big to sit on. Sadness touches your heart.', 8, -5),
  // new Room('Chicken Room', 'This room is filled with chickens. I hate chickens!', 9, -10),
  // new Room('Villan Room', 'This room contains a variety of milling villans. They seem OK, if a little tall. Good conversationalists.', 10, 5),
  // new Room('Dark Room', 'This room contains something sharp, but tis hard to see what it is', 11, -20)
];
