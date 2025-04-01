import { FC } from "react";
import {
  CalendarBgIcon,
  MdCalendarIcon,
  MiniCalendarIcon,
} from "../svgs/Icons";

interface EventsProps {
  fromEventsPage?: boolean;
}

const Events: FC<EventsProps> = ({ fromEventsPage }) => {
  return (
    <div className="bg-[#f2f2f2] w-[100%]">
      <div
        className={`${
          fromEventsPage ? "mt-10" : "lg:mt-[20vh] pb-20 mt-16"
        } lg:w-[80vw] w-[90vw] relative mx-auto flex lg:flex-row flex-col items-center justify-between`}
      >
        <div className="mb-10">
          {!fromEventsPage ? (
            <div className="mb-10">
              <h2 className="lg:text-[48px] text-[24px] font-semibold">
                Events
              </h2>
              <p className="lg:text-[25px] text-[#333] lg:w-[70%]">
                Lorem ipsum dolor sit amet consectetur. Praesent ultricies nunc
                dignissim in eget fusce vel diam in. Odio tellus vivamus elit
                vulputate eu nibh. Est condimentum viverra ut risus id fusce
                aliquam nunc. Vestibulum leo turpis.
              </p>
              <button className="bg-[#00689e] text-[#fff] text-[16px] font-semibold rounded-lg py-3 px-6 mt-6 lg:w-auto w-[100%]">
                View All Club Events
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-3 mb-4">
              <h2 className="lg:text-[30px] text-[24px] font-semibold">Events</h2>
              <MdCalendarIcon />
            </div>
          )}

          <div className="flex flex-col space-y-8">
            <h2 className="lg:text-[30px] text-[18px] text-[#232323]">
              Upcoming Events
            </h2>

            {fromEventsPage && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="lg:text-[20px]">
                    Maximizing Retirement Savings with Profit Sharing Plans for
                    Solopreneurs
                  </h2>
                  <div className="flex items-center text-[18px] space-x-3">
                    <MiniCalendarIcon />
                    <p>March 15, 2022</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="lg:text-[20px]">
                    Maximizing Retirement Savings with Profit Sharing Plans for
                    Solopreneurs
                  </h2>
                  <div className="flex items-center text-[18px] space-x-3">
                    <MiniCalendarIcon />
                    <p>March 15, 2022</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className="lg:text-[20px]">
                    Maximizing Retirement Savings with Profit Sharing Plans for
                    Solopreneurs
                  </h2>
                  <div className="flex items-center text-[18px] space-x-3">
                    <MiniCalendarIcon />
                    <p>March 15, 2022</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h2 className="lg:text-[20px]">
                Maximizing Retirement Savings with Profit Sharing Plans for
                Solopreneurs
              </h2>
              <div className="flex items-center text-[18px] space-x-3">
                <MiniCalendarIcon />
                <p>March 15, 2022</p>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="lg:text-[20px]">
                Maximizing Retirement Savings with Profit Sharing Plans for
                Solopreneurs
              </h2>
              <div className="flex items-center text-[18px] space-x-3">
                <MiniCalendarIcon />
                <p>March 15, 2022</p>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="lg:text-[20px]">
                Maximizing Retirement Savings with Profit Sharing Plans for
                Solopreneurs
              </h2>
              <div className="flex items-center text-[18px] space-x-3">
                <MiniCalendarIcon />
                <p>March 15, 2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute lg:-right-24 lg:scale-100 lg:-top-10 top-[15vh] scale-50">
          <CalendarBgIcon />
        </div>
      </div>
    </div>
  );
};

export default Events;
