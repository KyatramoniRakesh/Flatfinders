import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const popularAreas = [
  {
    name: 'Gachibowli',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    properties: 234
  },
  {
    name: 'HITEC City',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    properties: 186
  },
  {
    name: 'Jubilee Hills',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    properties: 156
  },
  {
    name: 'Banjara Hills',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    properties: 142
  }
];

const QuickLinks = () => {
  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
          Popular Areas in Hyderabad
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {popularAreas.map((area) => (
            <Link
              key={area.name}
              to={`/search?location=${area.name}`}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={area.image}
                  alt={area.name}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{area.name}</h3>
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span>{area.properties} Properties</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;