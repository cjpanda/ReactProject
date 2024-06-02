import mapIcon from "../images/map.png";

const Card = (props) => {
  console.log(props.item);
  return (
    <section className="card--container">
      <img src={props.item.imageUrl} alt="" className="card-image" />
      <div className="card--text-container">
        <div className="map--container">
          <img src={mapIcon} alt="icon" className="map--icon" />
          <p className="location">{props.item.location}</p>
          <a
            href={props.item.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map--link"
          >
            View on Google Maps
          </a>
        </div>
        <div>
          <h2>{props.item.title}</h2>
          <p className="card--date">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className="card--description">{props.item.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
