import "./index.css";

export default function ListItemB({ imageAm, isAmenity, name }) {
    if (isAmenity) {
      return (
        <li className="list-item">
          {imageAm ? <img height={24} width={24} src={imageAm} alt="icon" /> : ""}
          <div className="list-item__block">
            <div className="list-item__content">
              {name && <span className="list-item__content">{name}</span>}
            </div>
          </div>
        </li>
      );
    }
    return null;
  }

