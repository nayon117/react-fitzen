import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EventsCard = ({ event }) => {
    const {id, name, image, price, short_description } = event || {};
    
  return (
    <div className="card card-compact py-4 px-3 flex flex-col bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="image" />
      </figure>
      <h2 className="card-title py-2">{name}</h2>
      <p className="font-medium text-base ">Tickets On: {price}</p>
      <div className="flex-grow py-2 font-medium">
        <p>{short_description}</p>
      </div>

          <Link to={`/event/${id}`}>
              <button className="btn w-full  btn-neutral">See Details</button>
          </Link>
    </div>
  );
};

EventsCard.propTypes = {
  event: PropTypes.object,
};

export default EventsCard;
