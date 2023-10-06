import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function AdditionalProperties({ ...rest }) {
  return (
    <Box className="AdditionalProperties" shadow>
      <div className="details__header">
        <Heading border>Додаткові властивлсті:</Heading>
      </div>

      <List {...rest} />
    </Box>
  );
}

function List({ rules, policy, transport, lang, offer, instructions }) {
  return (
    <ul className="AdditionalProperties__list">
      <ListItem title="Правила дому">
        <span className="AdditionalProperties__text">{rules}</span>
      </ListItem>

      <ListItem title="Політика скасування">
        <span className="AdditionalProperties__text">{policy}</span>
      </ListItem>

      <ListItem title="Місцевий транспорт">
        <span className="AdditionalProperties__text">{transport}</span>
      </ListItem>

      <ListItem title="Мови хоста">
        <span className="AdditionalProperties__text">{lang.join(", ")}</span>
      </ListItem>

      <ListItem title="Спеціальні пропозиції:">
        <span className="AdditionalProperties__text">{offer}</span>
      </ListItem>

      <ListItem title="Інструкції щодо реєстрації">
        <span className="AdditionalProperties__text">{instructions}</span>
      </ListItem>
    </ul>
  );
}