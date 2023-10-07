import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Events from "../../components/Events/Events";

const Home = () => {
    const events = useLoaderData()
  
    return (
        <div>
            <Banner></Banner>
            <Events events={events}></Events>
        </div>
    );
};

export default Home;