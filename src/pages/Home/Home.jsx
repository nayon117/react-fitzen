import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Events from "../../components/Events/Events";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Statistics from "../../components/Statistics/Statistics";
import FeedBacks from "../../components/FeedBack/FeedBacks";

const Home = () => {
    const events = useLoaderData()
  
    return (
        <div>
            <Banner></Banner>
            <Events events={events}></Events>
            <WhyChoose></WhyChoose>
            <Statistics></Statistics>
            <FeedBacks></FeedBacks>
        </div>
    );
};

export default Home;