import toast from "react-hot-toast";

const NewsLetter = () => {
  const handleSubscribe = () => {
    toast.success("You have successfully subscribed");
  };
  return (
    <div>
      <div className="xl:flex xl:justify-end pt-16">
        <div className="container sm:mx-auto">
          <div className="block xl:flex justify-between xl:items-center lg:items-center md:flex">
            <div className="w-11/12 xl:w-4/12 mx-auto xl:mx-0 md:w-5/12">
              <h1 className="text-gray-800   text-3xl font-extrabold mb-3 mt-12 xl:mt-0">
                Sign Up for Updates
              </h1>
              <p className="text-lg text-gray-60 mb-6">
                Subscribe to our newsletter and stay connected with the latest
                news, updates, and exclusive offers from our yoga and fitness
                retreats.
              </p>
              <div className="flex w-full flex-wrap">
                <div className="w-full">
                  <div className="flex flex-col mb-3">
                    <label
                      className="text-base font-bold text-gray-800  mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="helloworld@gmail.com"
                      className="focus:outline-none  focus:border-indigo-700 border-gray-300 border rounded-sm py-2 outline-none pl-2 pr-2"
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    type="submit"
                    className="btn btn-neutral w-full  "
                  >
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
            </div>
            <div className="w-11/12 xl:w-5/12 mx-auto xl:mx-0 mt-8 xl:mt-0 flex justify-end md:w-5/12 bg-indigo-100 dark:bg-indigo-800 relative py-20">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500"
                className="h-4/5 w-4/5"
              >
                <img
                  src="https://i.ibb.co/xmLwvjJ/jump.jpg"
                  alt="A man jumping infront of a graffiti"
                  role="img"
                  className="h-full w-full overflow-hidden object-cover relative z-10 xl:-ml-56 lg:-ml-32 sm:-ml-20 -ml-12 md:-ml-20 rounded"
                />
              </div>
              <div className="absolute bottom-0 right-0 pb-2 pr-2 z-0">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/input_field_with_image-svg1.svg"
                  alt="pattern"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
