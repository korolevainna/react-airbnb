import { Fragment } from "react";

import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Attractions({ list }) {
  return (
    <div className="attractions__block">
      <Heading border>Памʼятки поблизу</Heading>

      <div className="attractions__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ name, link }) {
  return (
    <ListItem>
      <a href={link} target="attractions__blanck" className="attractions__link">
        {name}
      </a>
    </ListItem>
  );
}