import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default function UserRatings() {
  return (
    <ListGroup>
      <ListGroupItem>
        <div>Username</div>
        Pairs up nicely with an Asus ROG STRIX Z490-E and an NZXT Kraken X63. It
        seems to run pretty cool at stock clocks so there should be a good
        amount of room for overclocking but I haven't tried yet. Update: Stable
        overclock @ 5.1GHz but gets a bit warm (85+) with the cooling setup that
        I have right now so backed down to 5.0GHz.
      </ListGroupItem>
      <ListGroupItem>
        <div>_another_Username</div>I decided to go for the i7-10700k after
        doing some research and finding out that it's performance is pretty
        close to the i9-9900 I had originally wanted. Had some worries of it
        overheating but that was mainly an issue with my incorrect original
        placement of the CPU cooler. Runs alright but my next build I think I'll
        probably go for the favored brand AMD.
      </ListGroupItem>
      <ListGroupItem>
        <div>Scytherhm02</div>I love this cpu. It is so fast. I am running stock
        at an all core 4.67 - 4.8ghz load. Some cores get higher.
      </ListGroupItem>
    </ListGroup>
  );
}
