import React from 'react';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import PropertyCard from '../components/PropertyCard';
import Testimonials from '../components/Testimonials';
import { Property } from '../types';

const featuredProperties: Property[] = [
  {
    id: '1',
    title: 'Modern 2 BHK Apartment in Gachibowli',
    type: '2 BHK',
    price: 15000000,
    location: 'Financial District, Gachibowli, Hyderabad',
    area: 1850,
    bedrooms: 2,
    bathrooms: 2,
    description: 'Premium 2BHK apartment with modern amenities',
    features: ['Swimming Pool', 'Gym', 'Security', 'Power Backup'],
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    isFeatured: true,
    postedDate: '2024-03-15',
    propertyAge: '2 years',
    furnishing: 'Semi-Furnished',
    facing: 'East',
    floor: '12th',
    totalFloors: 15,
    carParking: 1,
    status: 'Ready to move',
    possession: 'Immediate'
  },
  {
    id: '2',
    title: 'Spacious 3 BHK Villa in Jubilee Hills',
    type: '3 BHK',
    price: 45000000,
    location: 'Road No. 10, Jubilee Hills, Hyderabad',
    area: 4200,
    bedrooms: 3,
    bathrooms: 3,
    description: 'Luxurious 3BHK villa with private garden',
    features: ['Private Pool', 'Garden', 'Home Theater', 'Modular Kitchen'],
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    isFeatured: true,
    postedDate: '2024-03-14',
    propertyAge: 'New',
    furnishing: 'Fully Furnished',
    facing: 'North',
    floor: 'Ground',
    totalFloors: 2,
    carParking: 2,
    status: 'Ready to move',
    possession: 'Immediate'
  },
  {
    id: '3',
    title: 'Premium 1 BHK in Kokapet',
    type: '1 BHK',
    price: 8500000,
    location: 'Golden Mile, Kokapet, Hyderabad',
    area: 950,
    bedrooms: 1,
    bathrooms: 1,
    description: 'Modern 1BHK apartment perfect for professionals',
    features: ['Club House', 'Jogging Track', 'Children\'s Play Area', '24/7 Security'],
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    isFeatured: true,
    postedDate: '2024-03-16',
    propertyAge: '1 year',
    furnishing: 'Semi-Furnished',
    facing: 'West',
    floor: '8th',
    totalFloors: 20,
    carParking: 1,
    status: 'Ready to move',
    possession: 'Immediate'
  },
  {
    id: '4',
    title: 'Luxury 4 BHK Penthouse in Manikonda',
    type: '4 BHK',
    price: 35000000,
    location: 'Sri Nagar Colony, Manikonda, Hyderabad',
    area: 3800,
    bedrooms: 4,
    bathrooms: 4,
    description: 'Exclusive penthouse with panoramic city views',
    features: ['Terrace Garden', 'Private Elevator', 'Smart Home', 'Premium Fittings'],
    images: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    isFeatured: true,
    postedDate: '2024-03-13',
    propertyAge: 'New',
    furnishing: 'Fully Furnished',
    facing: 'South',
    floor: '25th',
    totalFloors: 25,
    carParking: 3,
    status: 'Ready to move',
    possession: 'Immediate'
  },
  {
    id: '5',
    title: 'Modern 2 BHK in Financial District',
    type: '2 BHK',
    price: 12500000,
    location: 'Nanakramguda, Financial District, Hyderabad',
    area: 1650,
    bedrooms: 2,
    bathrooms: 2,
    description: 'Contemporary apartment near IT hub',
    features: ['Infinity Pool', 'Sky Lounge', 'Multi-purpose Court', 'EV Charging'],
    images: ['https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    isFeatured: false,
    postedDate: '2024-03-12',
    propertyAge: '6 months',
    furnishing: 'Unfurnished',
    facing: 'North-East',
    floor: '15th',
    totalFloors: 30,
    carParking: 1,
    status: 'Ready to move',
    possession: 'Immediate'
  },
  {
    id: '6',
    title: '3 BHK Villa in Nallagandla',
    type: '3 BHK',
    price: 28000000,
    location: 'Nallagandla, Hyderabad',
    area: 2800,
    bedrooms: 3,
    bathrooms: 3,
    description: 'Beautiful villa in a gated community',
    features: ['Private Garden', 'Study Room', 'Servant Quarter', 'Solar Panels'],
    images: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    isFeatured: false,
    postedDate: '2024-03-11',
    propertyAge: '3 years',
    furnishing: 'Semi-Furnished',
    facing: 'East',
    floor: 'Ground',
    totalFloors: 2,
    carParking: 2,
    status: 'Ready to move',
    possession: 'Immediate'
  }
];

const HomePage = () => {
  return (
    <div>
      <Hero />
      <QuickLinks />
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default HomePage;