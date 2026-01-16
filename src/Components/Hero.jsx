import React from 'react';
import heroImg from '../assets/hero.png'

const Hero = () => {
    return (
        <>

            <div className='max-w-[1200px] mx-auto mt-20'>
                <div className='h-[345px] border-2 border-red-400 text-center'>
                    <h2 className='text-5xl mb-5'>We Build <br />
                        <span>Productive</span> Apps</h2>
                    <p className='text-2xl'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='mt-11'>
                        <button className='btn mr-4'>playstore</button>
                        <button className='btn'>appstore</button>
                    </div>
                </div>
                <div className=''>
                   <div className='flex justify-center items-center'> <img src={heroImg} alt="" /></div>
                    <div className='max-w-[1200px] mx-auto text-center'>
                        <h2>Trusted by Millions, Built for You</h2>
                        <div>
                            <div>
                                <p>Total Downloads</p>
                                <h2>29.6M</h2>
                                <p>21% more than last month</p>
                            </div>
                            <div>
                                <p>Total Reviews</p>
                                <h2>906K</h2>
                                <p>46% more than last month</p>
                            </div>
                            <div>
                                <p>Active Apps</p>
                                <h2>132+</h2>
                                <p>31 more will Launch</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Hero;