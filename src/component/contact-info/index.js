import "./index.css";
import Heading from "../heading";

export default function ContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <div className="contact__block">
        <img src={image} alt={name} height={80} width={80} className="image" />
        <div className="contact__owner">
          <Heading>Господар - {name}</Heading>
          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>
            <span className="contact__sub-value">{response_time}</span>
            <span className="contact__sub-value">
              {response_rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>

      <p className="contact__info">{info}</p>
    </div>
  );
}