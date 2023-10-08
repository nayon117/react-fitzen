import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Events from "../../components/Events/Events";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Statistics from "../../components/Statistics/Statistics";

const Home = () => {
    const events = useLoaderData()
  
    return (
        <div>
            <Banner></Banner>
            <Events events={events}></Events>
            <WhyChoose></WhyChoose>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;