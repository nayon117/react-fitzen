const FeedBacks = () => {
  return (
    <div className="py-16">
      <div className="space-y-3">
        <h2 className="text-4xl text-center font-medium">
          Our participants love what we do
        </h2>
        <p className="text-center font-medium">
          Discover the transformative experiences and stories shared by those
          who have embarked on our wellness retreats.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
          <img
            src="https://i.ibb.co/7vbHQyJ/quote.png"
            aria-hidden="true"
          />
          <div className="pl-4 pt-4 flex items-start justify-between">
            <div className="mr-6">
              <p className="xl:text-xl xl:leading-loose text-gray-600">
                Life-changing retreat - serene, expert, and rejuvenating
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                Anna Smith
              </p>
            </div>
            <img
              src="https://i.ibb.co/qRcWFfM/avatar-1.png"
              alt="Display Avatar of Anna Smith"
              role="img"
            />
          </div>
        </div>
        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
          <img
            src="https://i.ibb.co/7vbHQyJ/quote.png"
            aria-hidden="true"
          />
          <div className="pl-4 pt-4 flex items-start justify-between">
            <div className="mr-6">
              <p className="xl:text-xl xl:leading-loose text-gray-600">
                Exceptional instructors, new friends, renewed purpose
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                Dany John
              </p>
            </div>
            <img
              src="https://i.ibb.co/vmqhQZ6/avatar-2.png"
              alt="Display avatar of Dany John"
              role="img"
            />
          </div>
        </div>
        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
          <img
            src="https://i.ibb.co/7vbHQyJ/quote.png"
            aria-hidden="true"
          />
          <div className="pl-4 pt-4 flex items-start justify-between">
            <div className="mr-6">
              <p className="xl:text-xl xl:leading-loose text-gray-600">
                Unforgettable mindfulness in stunning locations.
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                Mike Blake
              </p>
            </div>
            <img
              src="https://i.ibb.co/znmdwyv/avatar-3.png"
              alt="Display Avatar of Mike Blake"
              role="img"
            />
          </div>
        </div>

        <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
          <img
            src="https://i.ibb.co/7vbHQyJ/quote.png"
            aria-hidden="true"
          />
          <div className="pl-4 pt-4 flex items-start justify-between">
            <div className="mr-6">
              <p className="xl:text-xl xl:leading-loose text-gray-600">
                Perfect yoga retreat for beginners - patient instructors
              </p>
              <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                David{" "}
              </p>
            </div>
            <img
              src="https://i.ibb.co/JdVVPk9/avater4.png"
              alt="Display avatar of David"
              role="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBacks;
