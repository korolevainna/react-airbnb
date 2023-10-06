import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import GuestImage from "./guest.svg";
import BedroomImage from "./bedroom.svg";
import BedImage from "./bed.svg";
import BathroomImage from "./bathroom.svg";

export default function Details({ ...rest }) {
    return (
      <Box className="details" shadow>
        <div className="details__header">
          <Heading border>Деталі:</Heading>
        </div>
  
        <List {...rest} />
      </Box>
    );
  }
  
  function List({ guest, bedroom, bed, bathroom }) {
    return (
      <ul className="details__list">
        <ListItem imageSrc={GuestImage}>
          <span>{guest}</span>
          <span>гість</span>
        </ListItem>
  
        <ListItem imageSrc={BedroomImage}>
          <span>{bedroom}</span>
          <span>спальня</span>
        </ListItem>
  
        <ListItem imageSrc={BedImage}>
          <span>{bed}</span>
          <span>ліжко</span>
        </ListItem>
  
        <ListItem imageSrc={BathroomImage}>
          <span>{bathroom}</span>
          <span>ванна кімната</span>
        </ListItem>
      </ul>
    );
  }


