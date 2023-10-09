const Faq = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div role="article" className="bg-gray-100 py-12 md:px-8">
            <div className="px-4 xl:px-0 py-10">
              <div className="flex flex-col lg:flex-row flex-wrap">
                <div className="mt-4 lg:mt-0 lg:w-3/5">
                  <div>
                    <h1 className="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12">
                      Frequently asked questions
                    </h1>
                  </div>
                </div>
                <div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                  <div className="pt-2 relative text-gray-600">
                    <input
                      className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                      type="search"
                      name="search"
                      placeholder="Search"
                    />
                    <button
                      type="submit"
                      className="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700   focus:rounded-full focus:bg-gray-100 focus:ring-indigo-700 bg-white focus:outline-none absolute right-0 top-0 mt-5 mr-4"
                    >
                      <img
                        className="h-4 w-4"
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg1.svg"
                        alt="search"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 xl:px-0">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                <div role="cell" className="bg-gray-100 dark:bg-gray-800 ">
                  <div className="bg-white p-5 roun  ded-md relative h-full w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/27R6nk5/home-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">
                      Account Overview
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 cursor-pointer w-full space-x-3">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                          alt="bullet"
                        />
                        <h4 className="text-md text-gray-900  ">
                          How do I create an account on your platform?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full space-x-3">
                        <div>
                          <img
                            className=""
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900  ">
                          Can I change my account email address or password?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          What should I do if I forget my account password?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          Is there a way to delete my account and personal
                          information?
                        </h4>
                      </div>
                    </div>
                    <a
                      className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700  font-bold cursor-pointer flex items-center"
                      href="javascript:void(0)"
                    >
                      <p>Show All</p>
                      <div>
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg"
                          alt="arrow"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100 dark:bg-gray-800 ">
                  <div className="bg-white p-5 roun  ded-md relative h-full w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/bdGyLYk/pricetags-1.png"
                        alt="pricetags-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl  font-semibold">
                      Subscription Plans
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          What are the different subscription plans available?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          How do I upgrade or downgrade my subscription plan?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          Can I cancel my subscription at any time, and what is
                          the process?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          Are there any discounts or promotions for long-term
                          subscriptions?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full"></div>
                    </div>
                    <a
                      className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700   font-bold cursor-pointer flex items-center"
                      href="javascript:void(0)"
                    >
                      <p>Show All</p>
                      <div>
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg"
                          alt="arrow"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100   ">
                  <div className="bg-white p-5 roun  ded-md relative h-full w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/GT4KHvJ/card-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl  font-semibold">
                      Payment Options
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          What payment methods do you accept for subscriptions?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          Is my payment information secure when I make a
                          transaction?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          Can I change my default payment method?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          Do you offer refunds for subscription payments?
                        </h4>
                      </div>
                    </div>
                    <a
                      className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700   font-bold cursor-pointer flex items-center"
                      href="javascript:void(0)"
                    >
                      <p>Show All</p>
                      <div>
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg"
                          alt="arrow"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100 dark:bg-gray-800 ">
                  <div className="bg-white p-5 round  ded-md h-full relative w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/rG4r6NJ/notifications-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl dark:text-white font-semibold">
                      Notification Settings
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          How can I customize the types of notifications I
                          receive?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          Can I opt out of marketing emails and promotional
                          notifications?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4  cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          What notifications are essential for staying updated
                          on retreats and events?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          How do I ensure I receive notifications for my
                          subscribed retreats?
                        </h4>
                      </div>
                    </div>
                    <a
                      className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700   font-bold cursor-pointer flex items-center"
                      href="javascript:void(0)"
                    >
                      <p>Show All</p>
                      <div>
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg"
                          alt="arrow"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100  ">
                  <div className="relative bg-white    p-5 rounded-md   h-full w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/HFC1hqn/people-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl  font-semibold">
                      Profile Preferences
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          How do I update my profile information, such as my
                          name and profile picture?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          Can I change my notification preferences for specific
                          retreats?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          What information can I share or keep private on my
                          profile?
                        </h4>
                      </div>
                    </div>
                    <a
                      className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700  font-bold cursor-pointer flex items-center"
                      href="javascript:void(0)"
                    >
                      <p>Show All</p>
                      <div>
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg"
                          alt="arrow"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div role="cell" className="bg-gray-100 dark:bg-gray-800 ">
                  <div className="relative bg-white    p-5 rounded-md   h-full w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/QX80fYm/lock-closed-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl   font-semibold">
                      Privacy and Cookies
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          How do you protect my personal information and data
                          privacy?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          What is your cookie policy, and how are cookies used
                          on the website?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900  pl-4">
                          Can I request access to or deletion of my personal
                          data?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4   cursor-pointer w-full">
                        <div>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg2.svg"
                            alt="bullet"
                          />
                        </div>
                        <h4 className="text-md text-gray-900   pl-4">
                          Where can I find your complete privacy policy for more
                          details?
                        </h4>
                      </div>
                    </div>
                    <a
                      className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700   font-bold cursor-pointer flex items-center"
                      href="javascript:void(0)"
                    >
                      <p>Show All</p>
                      <div>
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-1-svg3.svg"
                          alt="arrow"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
