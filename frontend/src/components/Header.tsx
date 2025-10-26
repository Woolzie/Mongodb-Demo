//it should show the syntax in a nice form (smaller letters than the type of query)

import { data } from "../lib/data.ts";
import "../styles/header.css";

type HeaderProps = {
    topic: number;
};

const Header = ({ topic }: HeaderProps) => {
    return (
        <div className="aesthetic">
            <div className="flex  gap-0.1 border-t-[0.5rem] border-b-[0.5rem] border-black bg-white mt-[2rem]   p-[0.5rem] justify-between text-[4rem] content-fit text-nowrap">
                <div className="ml-4">{data[topic].syntax}</div>
            </div>

            <div className="relative mt-[2rem]">
                <div className="flagshadow">
                    <div className="sinverse"></div>
                    <div className="striangle"></div>
                </div>
                <div className="flag">
                    <div className="h-[5px] w-[2rem] bg-black"></div>
                    <div className="inverse"></div>
                    <div className="triangle"></div>
                </div>
            </div>
        </div>
    );
};
export default Header;
