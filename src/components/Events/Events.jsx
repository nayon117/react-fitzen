
import PropTypes from 'prop-types';
import EventsCard from './EventsCard';

const Events = ({ events }) => {
    
    return (
        <div className="">
            <h2 className="text-3xl font-semibold text-center pt-10">Popular Events</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                {
                    events.map(event => <EventsCard
                        key={event.id}
                        event={event}
                    ></EventsCard>)
                }
            </div>
   </div>
    );
};

Events.propTypes = {
    events:PropTypes.array
};

export default Events;