import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import SkillIcon from "./SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Div from "./Div";

// IMAGES
import sk1 from "../assets/iq1.png";
import sk2 from "../assets/iq2.png";
import sk3 from "../assets/iq3.png";
import sk4 from "../assets/iq4.png";
import sk5 from "../assets/iq5.png";
import sk6 from "../assets/iq6.png";
import sk7 from "../assets/iq7.png";
import sk8 from "../assets/iq8.png";
import sk9 from "../assets/iq9.png";
import sk10 from "../assets/iq10.png";
import sk11 from "../assets/iq11.png";
import sk12 from "../assets/iq12.png";
import pattern from "../assets/heading-pattern.png";
import pe1 from "../assets/sec-3-p-e-1.png";
import pe2 from "../assets/sec-3-p-e-2.png";
import pe3 from "../assets/sec-3-p-e-3.png";

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="bg-[#111111] py-[50px] md:py-[100px] relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
            {/* BACKGROUND ELEMENTS END */}
            <Wrapper>
                {/* SKILL ICONS START */}
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-12 relative">
                    <SkillIcon path={sk1} />
                    <SkillIcon path={sk2} />
                    <SkillIcon path={sk3} />
                    <SkillIcon path={sk10} />
                    <SkillIcon path={sk11} />
                    <SkillIcon path={sk12} />
                    <SkillIcon path={sk4} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk6} />
                    <SkillIcon path={sk7} />
                    <SkillIcon path={sk8} />
                    <SkillIcon path={sk9} />
                    
                </Div>
                {/* SKILL ICONS END */}

                {/* SERVICES SECTION START */}
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    {/* SERVICES START */}
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10 ">
                        <Service
                            num="1"
                            title="React Js"
                            desc={`I'm a creative and detail-oriented professional
                             with a deep understanding of front-end web development. I excel in harnessing
                              the power of React, a popular JavaScript library, to craft dynamic and interactive
                               user interfaces. I'm passionate about writing clean, efficient,
                                and maintainable code, ensuring seamless user experiences across various devices and browsers.`}
                            data={[
                                "ReactJs",
                                "Redux",
                                "React-Router",
                                "Axios",
                                "Jest"
                                
                            ]}
                        />
                        <Service
                            num="2"
                            title="Front-end Developement"
                            desc={`
                            As a front-end developer, I'm the creative architect of the digital world,
                             translating design concepts into captivating user experiences. My skillset 
                             is a blend of artistic flair and technical mastery, where I craft visually 
                             appealing and seamlessly interactive websites and applications.`}
                            data={[
                                "UI",
                                "UX",
                                "Responsive Web Design",
                                "Cross-Browser Compatibility",
                                "Performance Optimization",

                                
                            ]}
                        />
                        <Service
                            num="3"
                            title="Html/Css/Javascript"
                            desc={`
                            With a strong command of HTML, CSS, and JavaScript, i bring static designs 
                            to life, ensuring they not only look stunning but also function flawlessly
                             across various devices and browsers. My attention to detail is unparalleled,
                              as I meticulously fine-tune layouts, fonts, colors, and animations to create
                               pixel-perfect designs.`}
                            data={[
                                "Html 5",
                                "Css 3",
                                "Javascript ES6",
                                "Sass",
                                "Tailwind Css",
                            ]}
                        />
                        <Service
                            num="4"
                            title="Good Communication"
                            desc={`
                            My ability to collaborate and communicate effectively with designers,
                             back-end developers, and stakeholders is a valuable asset.
                              I bridge the gap between design and functionality, 
                              ensuring that user interfaces are both aesthetically pleasing and user-friendly.
                               My passion for optimizing performance and accessibility ensures that every visitor
                                has a smooth and inclusive experience.`}
                            data={[
                                "Continuous Learning",
                                "Time Management",
                                "Active Listening",
                                
                            ]}
                        />
                    </div>
                    {/* SERVICES END */}

                    {/* SECTION HEADING START */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>Solving</span>
                        <span>Problems</span>
                        <span className="flex items-center gap-2">
                            Through
                            <img
                                src={pattern}
                                className="block md:hidden w-[80px] mt-1"
                            />
                        </span>
                        <span className="flex items-center gap-4">
                            Good{" "}
                            <img
                                src={pattern}
                                className="hidden md:block md:w-[140px] 2xl:w-[190px] mt-3"
                            />
                        </span>
                        <span>Services</span>
                    </div>
                    {/* SECTION HEADING END */}
                </div>
                {/* SERVICES SECTION END */}

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
