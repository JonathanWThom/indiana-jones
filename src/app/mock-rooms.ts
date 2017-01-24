import { Room } from './room.model';

export const ROOMS: Room[] = [
  new Room('Entry Hall', 'You enter the tomb. It is dark. To your left is a wooden door, to your right, a dark passage way. Choose Option 1 to go through the wooden door. Choose Option 2 to go down the dark passage way.', 1, 0, 2, 3),
  new Room('Relexation Room', 'This room has soft furniture and soothing music. Sit back and recharge.', 2, 25, 4, 5),
  new Room('Water Room', 'This room is flooded. And you can only dog-paddle!', 3, -50, 6, 7),
  new Room('Dining Room', 'An elegant dining room. Mmm, tasty food!', 4, 25, 8, 9),
  new Room('Chasm Room', 'This room is a gaping pit. You got to the bottom OK, if a little fast.', 5, -50, 10, 11),
  new Room('Chicken Room', 'This room is filled with chickens. I hate chickens! They taste good, though.', 6, 25, 12, 13),
  new Room('Greenhouse', 'This room contains plants, and lot of em. Some are carnivorous, and some taste good. Mostly carnivorous, though.', 7, -50, 0, 0),
  new Room('Throne Room', 'This room contains a big throne, far too big to sit on. You can lie down and rest, though.', 8, 25, 14, 15),
  new Room('Snake Room', 'This room contains snakes. I hate snakes!', 9, -50, 14, 15),
  new Room('Villan Room', 'This room contains a variety of milling villans. They seem OK, if a little tall. Good conversationalists.', 10, 25, 14, 15),
  new Room('Dark Room', 'This room contains something furry and moving, but tis hard to see what it is. It has teeth, though.', 11, -50, 14, 15),
  new Room('Room of Fluffy Things', 'This room contains various fluffy objects, which waltz up and comfort you.', 12, 25, 14, 15),
  new Room('Room of Molten Lava', 'This room contains lava, which seems distinctly warm.', 13, -50, 14, 15),
  new Room('Room of Death', 'This room contains a slow and painful death. I offer you my sincere apologies.', 14, -5000, 0, 0),
  new Room('Winner Room', 'This room contains refulgent incredibleness, and you have won everything. Ever.', 15, 5000, 0, 0)
];
