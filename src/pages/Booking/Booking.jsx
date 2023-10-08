import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";

const Booking = () => {
  const [booking, setBooking] = useState([]);
  const [noFound, setNoFound] = useState(false)

  useEffect(() => {
    const bookingItems = JSON.parse(localStorage.getItem("booking"));
    if (bookingItems) {
      setBooking(bookingItems);
    } else {
        setNoFound("You haven't booked any event yet")
    }
  }, []);
   
  return (
    <div>
          {
              noFound ? <p className="h-[65vh] flex justify-center items-center text-2xl font-bold">{noFound}</p> : <div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-10">
                      {
                          booking.map(bookedEvent => <BookingCard
                              key={bookedEvent.id}
                              bookedEvent={bookedEvent}
                          ></BookingCard>)
                      }
                  </div>
              </div>
          }
    </div>
         
  );
};

export default Booking;
