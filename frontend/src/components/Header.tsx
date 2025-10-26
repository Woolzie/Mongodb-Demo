//it should show the syntax in a nice form (smaller letters than the type of query)

import { data } from "../lib/data.ts";
import "../styles/header.css";

type HeaderProps = {
    topic: number;
};

const Header = ({ topic }: HeaderProps) => {
    return (
        <div className="w-fit flex mt-1 lg:mt-4 xl:mt-6">
            <div className="flex items-center border-black bg-white content-fit text-nowrap border-t-[0.5rem] border-b-[0.5rem] lg:border-t-[0.6rem] lg:border-b-[0.6rem] xl:border-t-[0.7rem] xl:border-b-[0.7rem]  ">
                <div className="ml-4 text-2xl text-bold pr-[0.1rem] lg:pr-2 lg:text-4xl xl:pr-8  xl:text-[2.5rem] ">
                    {topic === null ? "" : data[topic].brief}
                </div>
            </div>
            <div className="relative">
                <div className="flag-offset"></div>
                <div className="white-down-flag"></div>
                <div className="white-up-flag"></div>
            </div>
            <div className="relative">
                <div className="black-up-flag"></div>
                <div className="black-down-flag"></div>
            </div>
        </div>
    );
};
export default Header;
