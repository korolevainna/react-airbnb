import "./index.css";

import Box from "../box";
import ListItemI from "../list-item-i";
import Heading from "../heading";

import Pool from "./svg/pool.svg";
import Gym from "./svg/gym.svg";
import FreeBreakfast from "./svg/breakfast.svg";
import Wifi from "./svg/wifi.svg";
import FreeParking from "./svg/parking.svg";
import Pets from "./svg/pets.svg";
import AirportTransfer from "./svg/airport-transfer.svg";
import Concierge from "./svg/concierge.svg";
import RoomService from "./svg/room-serv.svg";
import ForChild from "./svg/forchild.svg";

export default function Amenities({ ...rest }) {
  // const arr = Object.keys(list)
  //   .filter((item) => list[item])
  //   .map((item, index) => console.log(item, list[item]));
  return (
    <Box className="amenities" shadow>
      <div className="amenities__header">
        <Heading border>ЗЗручності</Heading>
      </div>
      <List {...rest} />
    </Box>
  );
}

function List({ list }) {
  return (
    <ul className="amenities__list">
      <ListItemI
        imageAm={Pool}
        name="Басейн"
        isAmenity={list.hasPool}
      >
      </ListItemI>

      <ListItemI
        imageAm={Gym}
        name="Спорт зал"
        isAmenity={list.hasGym}
      >
      </ListItemI>

      <ListItemI
        imageAm={FreeBreakfast}
        name="Безкоштовний сніданок"
        isAmenity={list.hasFreeBreakfast}
      >
      </ListItemI>

      <ListItemI
        imageAm={Wifi}
        name="Безкоштовний Wifi"
        isAmenity={list.hasFreeWiFi}
      >
      </ListItemI>

      <ListItemI
        imageAm={FreeParking}
        name="Безкоштовний вуличний паркінг"
        isAmenity={list.hasParking}
      >
      </ListItemI>

      <ListItemI
        imageAm={Pets}
        name="Дозволено розміщення з домашніми тваринами"
        isAmenity={list.hasPetsAllowed}
      >
      </ListItemI>

      <ListItemI
        imageAm={AirportTransfer}
        name="Трансфер до/з аеропорту"
        isAmenity={list.hasAirportShuttle}
      >
      </ListItemI>

      <ListItemI
        imageAm={Concierge}
        name="Консьєрж-сервіс"
        isAmenity={list.hasConciergeService}
      >
      </ListItemI>

      <ListItemI
        imageAm={RoomService}
        name="Обслуговування номерів"
        isAmenity={list.hasRoomService}
      >
      </ListItemI>

      <ListItemI
        imageAm={ForChild}
        name="Підходить для дітей"
        isAmenity={list.hasChildFriendly}
      >      
      </ListItemI>
    </ul>
  );
}