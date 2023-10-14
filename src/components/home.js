import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#000026]"
        >
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    Bhavya Choubey
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                    I'm a Full Stack Developer.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm an enthusiastic full-stack web developer that is mostly focused on frontend development. I've just recently entered this interesting industry, and I'm excited to keep moving forward in it since I enjoy designing user experiences that are both captivating and intuitive.
                </p>
                <div>
                    <Link
                        to="about"
                        smooth
                        duration={500}
                        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                    >
                        About Me
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight size={25} className="ml-3" />
                        </span>
                    </Link>
                </div>
            </div>
            
        </div>

    );
};
export default Home;