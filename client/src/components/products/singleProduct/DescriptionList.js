import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default function DescriptionList() {
  return (
    <ListGroup>
      <ListGroupItem>
        <li>MPN: BX8070110700K</li>
        <li>10th Gen</li>
        <li>8 Cores & 16 Threads</li>
        <li>3.8 GHz Clock Speed</li>
        <li>5.1 GHz Maximum Turbo Frequency</li>
        <li>Compatible with Intel 400 series chipset based motherboards</li>
        <li>LGA 1200 Socket</li>
        <li>Intel UHD Graphics 630</li>
        <li>Intel Turbo Boost Max Technology 3.0 support</li>
        <li>Intel Optane Memory Support</li>
        <li>No thermal solution included</li>
      </ListGroupItem>
    </ListGroup>
  );
}
