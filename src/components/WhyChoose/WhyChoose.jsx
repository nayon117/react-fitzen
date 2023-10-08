import { AiOutlineClockCircle } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { GiAchievement } from "react-icons/gi";

const WhyChoose = () => {
  return (
    <div>
      <div className="overflow-y-hidden">
        <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
          <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
            <div className>
              <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
                Why choose us
              </p>
              <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
              Discover the Reasons to Choose Our Retreats for Wellness and Transformation.
              </p>
              <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                <img
                  src="https://i.ibb.co/BqGLz22/yoga-instructor.jpg"
                  alt="instructer"
                  className="w-full rounded obejct-fit object-center object-fill h-full"
                />
              </div>
              <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                     <p><AiOutlineClockCircle className="text-5xl"></AiOutlineClockCircle></p>
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                    Time-Tested 
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    Decades of retreat excellence.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <p><BiSolidUser className="text-5xl"></BiSolidUser></p>
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                    User-Friendly 
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    Streamlined, user-friendly booking.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <p><HiOutlineLightBulb className="text-5xl text-black"></HiOutlineLightBulb></p>
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                    Innovative Experiences
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    Always fresh, always unique.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <p><GiAchievement className="text-5xl"></GiAchievement></p>
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                    Achievement-Oriented
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                    Achieve your wellness goals with us
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
              <img
                src="https://i.ibb.co/BqGLz22/yoga-instructor.jpg"
                alt="ongoing meeting"
                className="w-full rounded obejct-fit object-center object-fill h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
