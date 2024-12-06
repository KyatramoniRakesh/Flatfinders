import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="relative">
      <div 
        className="h-[300px] sm:h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Your Dream Property in Hyderabad
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-8">
            Search from over 10,000+ properties across prime locations
          </p>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Hero;