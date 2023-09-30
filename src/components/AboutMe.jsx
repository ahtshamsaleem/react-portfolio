import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Wrapper from "./Wrapper";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>A ReactJs Developer</span>
                    <span className="flex items-center gap-2">
                        <span>Based</span>
                        {/* <img
                            src={flag}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2 "
                        /> */}
                        <span>In Pakistan</span>
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className=" max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                I'm a passionate front-end React developer with a keen eye for crafting engaging and user-friendly web experiences. With a strong foundation in JavaScript and a deep understanding of React, I thrive on turning ideas into elegant, interactive, and responsive web applications. My journey in web development has equipped me with a diverse skill set, including proficiency in HTML, CSS, and modern front-end libraries and frameworks.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                I'm constantly exploring new trends and technologies to stay at the forefront of the ever-evolving web landscape.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                When I'm not coding, you can find me seeking inspiration in design principles, solving complex UI challenges, and collaborating with cross-functional teams to bring innovative digital solutions to life. I'm excited to contribute my expertise to projects that value both aesthetics and functionality, always striving to create seamless user experiences that leave a lasting impression. Let's build something great together!






                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
