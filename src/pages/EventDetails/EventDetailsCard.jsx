import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { AiOutlineClockCircle } from "react-icons/ai";

const EventDetailsCard = ({ events }) => {
    const {id, name, image, details } = events || {}
    
    const handleBooking = () => {
        const bookingArray = []
        const bookingItems = JSON.parse(localStorage.getItem('booking'))
        if (!bookingItems) {
            bookingArray.push(events)
            localStorage.setItem('booking', JSON.stringify(bookingArray))
            toast.success('you have successfully booked the event')
        }
        else {
            const isExist = bookingItems.find(events => events.id === id)
            if (!isExist) {
                bookingArray.push(...bookingItems, events)
                localStorage.setItem('booking', JSON.stringify(bookingArray))
                toast.success('You have successfully booked this event')
            }
            else {
                toast.error('You have already booked this event')
            }
        }
    }
    return (
        <div className='my-12'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <img src={image} alt="" />
                <button onClick={handleBooking} className='btn btn-neutral my-3 '><AiOutlineClockCircle className='text-xl'></AiOutlineClockCircle>Book Now</button>
           </div>
            <div className='md:px-8 lg:px-0'>
            <h2 className='text-2xl font-medium py-3'>{name}</h2>
            <p className='font-medium'>{ details}</p>
           </div>
        </div>
    );
};

EventDetailsCard.propTypes = {
    events:PropTypes.object
};

export default EventDetailsCard;