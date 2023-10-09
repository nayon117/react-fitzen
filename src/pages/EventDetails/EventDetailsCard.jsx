import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const EventDetailsCard = ({ events }) => {
  const { id, name, image, details,duration,meal,price } = events || {};

  const handleBooking = () => {
    const bookingArray = [];
    const bookingItems = JSON.parse(localStorage.getItem("booking"));
    if (!bookingItems) {
      bookingArray.push(events);
      localStorage.setItem("booking", JSON.stringify(bookingArray));
      toast.success("you have successfully booked the event");
    } else {
      const isExist = bookingItems.find((events) => events.id === id);
      if (!isExist) {
        bookingArray.push(...bookingItems, events);
        localStorage.setItem("booking", JSON.stringify(bookingArray));
        toast.success("You have successfully booked this event");
      } else {
        toast.error("You have already booked this event");
      }
    }
  };
  return (
    <div className="my-12">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <img src={image} alt="" />
        <button onClick={handleBooking} className="btn btn-neutral my-3 ">
          <AiOutlineClockCircle className="text-xl"></AiOutlineClockCircle>Book
          Now
        </button>
      </div>
      <div className="md:px-8 lg:px-0">
        <h2 className="text-2xl font-bold py-3">
          {name}
        </h2>
        <div className="space-y-3">
        <h3 className=" font-bold">Duration: {duration}</h3>
        <p className="font-bold">{meal}</p>
        <h3 className="font-bold">price: { price} per person</h3>
        <p className="font-medium">{details}</p>
        </div>
        <Link to="/">
          <button className="btn btn-neutral my-4">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

EventDetailsCard.propTypes = {
  events: PropTypes.object,
};

export default EventDetailsCard;
