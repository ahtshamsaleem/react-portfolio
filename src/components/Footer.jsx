import React from "react";

import Wrapper from "./Wrapper";
import gmailIcon from "../assets/email-icon.png";
import whatsapp from '../assets/whatsapp.svg'
import { scrollTo } from "../helper";

const Footer = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <Wrapper>
                {/* NAVBAR START */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-10">
                    <div className="flex items-center gap-2 md:gap-8 flex-col md:flex-row">


                    <a href="mailto:iqwebdev600@gmail.com?subject='Hello from Ihtisham!'" target="external">
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-gray-200  flex justify-center items-center">
                            <img src={gmailIcon} alt="" className="w-[18px]" />
                        </div>
                        <div>iqwebdev600@gmail.com</div>
                    </div>
                    </a>

                    <a href="https://wa.me/+923016667656" target="external">
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-gray-200  flex justify-center items-center">
                            <img src={whatsapp} alt="" className="w-[20px]" />
                        </div>
                        <div>+923016667656</div>
                    </div>
                    </a>
                    </div>


                    <ul className="flex 2xl:text-[20px] gap-5 md:gap-8">
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("about")}
                        >
                            About me
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("work")}
                        >
                            Work
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
                {/* NAVBAR END */}
            </Wrapper>
        </div>
    );
};

export default Footer;
