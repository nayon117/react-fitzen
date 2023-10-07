import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EventDetailsCard from "./EventDetailsCard";

const EventDetails = () => {
    const [events,setEvents] = useState([])
    const {id} = useParams()
    const eventsData = useLoaderData()
    useEffect(() => {
        const findEvents = eventsData?.find(eventId => eventId.id === id)
        setEvents(findEvents)
    },[eventsData,id])
    return (
        <div>
            <EventDetailsCard events={events}></EventDetailsCard>
        </div>
    );
};

export default EventDetails;