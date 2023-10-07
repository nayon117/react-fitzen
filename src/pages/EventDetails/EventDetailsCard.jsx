import PropTypes from 'prop-types';
import { AiOutlineClockCircle } from "react-icons/ai";

const EventDetailsCard = ({ events }) => {
   const {name,image,details} = events || {}
    return (
        <div className='my-12'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <img src={image} alt="" />
                <button className='btn btn-neutral my-3 '><AiOutlineClockCircle className='text-xl'></AiOutlineClockCircle>Book Now</button>
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