
const Banner = () => {
    return (
        <div>
      <div
        className="hero relative h-[80vh] rounded"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/JrCbK8r/banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="form-control space-y-3  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <h1 className="mb-5 text-xl md:text-2xl text-black lg:text-4xl whitespace-nowrap font-bold">Embark on a Journey of Wellness</h1>
                <p className="text-black pb-4 font-medium">Your wellness journey begins here. Join us on a path to self-discovery, enlightenment, and self-care. Explore our retreat offerings and embark on an adventure that will leave you feeling refreshed and inspired.</p>
                <button className="btn btn-sm btn-neutral mx-auto w-36">Learn More</button>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  
    );
};

export default Banner;