import React from 'react';
import heroImg from '../assets/hero.png'

const Hero = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto mt-20'>
                {/* Hero Text Section */}
                <div className='text-center mb-12'>
                    <h2 className='text-5xl font-bold mb-5'>
                        We Build <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>Productive</span> Apps
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> 
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className='mt-8 flex gap-4 justify-center'>
                        <a className='btn btn-primary px-8' href="https://play.google.com/store/games?hl=en_US&pli=1" target='_blank'>PlayStore</a>
                        <a className='btn btn-outline px-8' href="https://www.apple.com/app-store/" target='_blank'>AppStore</a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className='flex justify-center items-center mb-16'>
                    <img src={heroImg} alt="Hero" className='max-w-full h-auto' />
                </div>

                {/* Stats Section */}
                <div className='bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl shadow-xl px-16 py-16 mb-14'>
                    <h2 className='text-3xl font-bold text-center mb-12'>Trusted by Millions, Built for You</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
                        <div>
                            <p className='text-lg mb-2 opacity-90'>Total Downloads</p>
                            <h2 className='text-5xl font-bold mb-2'>29.6M</h2>
                            <p className='text-sm opacity-75'>21% more than last month</p>
                        </div>
                        <div>
                            <p className='text-lg mb-2 opacity-90'>Total Reviews</p>
                            <h2 className='text-5xl font-bold mb-2'>906K</h2>
                            <p className='text-sm opacity-75'>46% more than last month</p>
                        </div>
                        <div>
                            <p className='text-lg mb-2 opacity-90'>Active Apps</p>
                            <h2 className='text-5xl font-bold mb-2'>132+</h2>
                            <p className='text-sm opacity-75'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;