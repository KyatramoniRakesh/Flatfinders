import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import { Property } from '../types';
import { Loader } from 'lucide-react';

// Extended mock data for better filtering
const allProperties: Property[] = [
  // Original properties
  {
    id: '1',
    title: 'Modern 2 BHK Apartment in Gachibowli',
    type: '2 BHK',
    price: 15000000,
    location: 'Financial District, Gachibowli',
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
    location: 'Jubilee Hills',
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
  // Additional properties for better filtering
  {
    id: '3',
    title: 'Budget 1 BHK in Kokapet',
    type: '1 BHK',
    price: 3500000,
    location: 'Kokapet',
    area: 650,
    bedrooms: 1,
    bathrooms: 1,
    description: 'Affordable 1BHK perfect for first-time buyers',
    features: ['Security', 'Power Backup', 'Car Parking'],
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    isFeatured: false,
    postedDate: '2024-03-16',
    propertyAge: 'New',
    furnishing: 'Unfurnished',
    facing: 'West',
    floor: '2nd',
    totalFloors: 5,
    carParking: 1,
    status: 'Ready to move',
    possession: 'Immediate'
  },
  {
    id: '4',
    title: 'Premium 2 BHK in Manikonda',
    type: '2 BHK',
    price: 7500000,
    location: 'Manikonda',
    area: 1200,
    bedrooms: 2,
    bathrooms: 2,
    description: 'Well-designed apartment in a prime location',
    features: ['Gym', 'Children\'s Play Area', 'Visitor Parking'],
    images: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    isFeatured: false,
    postedDate: '2024-03-13',
    propertyAge: '1 year',
    furnishing: 'Semi-Furnished',
    facing: 'South',
    floor: '4th',
    totalFloors: 6,
    carParking: 1,
    status: 'Ready to move',
    possession: 'Immediate'
  },
  {
    id: '5',
    title: 'Luxury 4 BHK in Financial District',
    type: '4 BHK',
    price: 25000000,
    location: 'Financial District',
    area: 2800,
    bedrooms: 4,
    bathrooms: 4,
    description: 'High-end apartment with premium amenities',
    features: ['Swimming Pool', 'Gym', 'Club House', 'Tennis Court'],
    images: ['https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    isFeatured: true,
    postedDate: '2024-03-12',
    propertyAge: 'New',
    furnishing: 'Fully Furnished',
    facing: 'North-East',
    floor: '18th',
    totalFloors: 20,
    carParking: 2,
    status: 'Ready to move',
    possession: 'Immediate'
  },
  {
    id: '6',
    title: '3 BHK Villa in Nallagandla',
    type: '3 BHK',
    price: 18000000,
    location: 'Nallagandla',
    area: 2200,
    bedrooms: 3,
    bathrooms: 3,
    description: 'Beautiful villa with modern architecture',
    features: ['Private Garden', 'Study Room', 'Modular Kitchen'],
    images: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    isFeatured: false,
    postedDate: '2024-03-11',
    propertyAge: '2 years',
    furnishing: 'Semi-Furnished',
    facing: 'East',
    floor: 'Ground',
    totalFloors: 2,
    carParking: 2,
    status: 'Ready to move',
    possession: 'Immediate'
  }
];

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('relevance');
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState({
    propertyType: new Set<string>(),
    priceRange: new Set<string>(),
    bhk: new Set<string>(),
    furnishing: new Set<string>(),
    status: new Set<string>()
  });

  // Get search parameters
  const location = searchParams.get('location') || '';
  const propertyType = searchParams.get('type') || '';
  const budget = searchParams.get('budget') || '';

  const toggleFilter = (category: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      const set = new Set(prev[category]);
      if (set.has(value)) {
        set.delete(value);
      } else {
        set.add(value);
      }
      newFilters[category] = set;
      return newFilters;
    });
  };

  // Filter and sort properties
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filtered = [...allProperties];

      // Location filter
      if (location) {
        filtered = filtered.filter(property => 
          property.location.toLowerCase().includes(location.toLowerCase())
        );
      }

      // Property type filter
      if (selectedFilters.propertyType.size > 0) {
        filtered = filtered.filter(property =>
          selectedFilters.propertyType.has(property.type)
        );
      }

      // Price range filter
      if (selectedFilters.priceRange.size > 0) {
        filtered = filtered.filter(property => {
          const price = property.price;
          return Array.from(selectedFilters.priceRange).some(range => {
            switch (range) {
              case 'Under ₹50 Lac':
                return price < 5000000;
              case '₹50 Lac - 1 Cr':
                return price >= 5000000 && price < 10000000;
              case '₹1 Cr - 2 Cr':
                return price >= 10000000 && price < 20000000;
              case 'Above ₹2 Cr':
                return price >= 20000000;
              default:
                return true;
            }
          });
        });
      }

      // Furnishing filter
      if (selectedFilters.furnishing.size > 0) {
        filtered = filtered.filter(property =>
          selectedFilters.furnishing.has(property.furnishing)
        );
      }

      // Sort properties
      switch (sortBy) {
        case 'price_low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price_high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          filtered.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
          break;
      }

      setFilteredProperties(filtered);
      setLoading(false);
    }, 800); // Simulate loading delay
  }, [location, selectedFilters, sortBy]);

  return (
    <div>
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <SearchBar />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {filteredProperties.length} Properties {location ? `in ${location}` : 'in Hyderabad'}
          </h1>
          <div className="flex items-center space-x-4">
            <label htmlFor="sort" className="text-gray-600">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="relevance">Relevance</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Filters and Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              
              {/* Property Type Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Property Type</h3>
                <div className="space-y-2">
                  {['1 BHK', '2 BHK', '3 BHK', '4 BHK'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.propertyType.has(type)}
                        onChange={() => toggleFilter('propertyType', type)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Budget</h3>
                <div className="space-y-2">
                  {[
                    'Under ₹50 Lac',
                    '₹50 Lac - 1 Cr',
                    '₹1 Cr - 2 Cr',
                    'Above ₹2 Cr'
                  ].map((range) => (
                    <label key={range} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.priceRange.has(range)}
                        onChange={() => toggleFilter('priceRange', range)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Furnishing Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Furnishing</h3>
                <div className="space-y-2">
                  {[
                    'Fully Furnished',
                    'Semi-Furnished',
                    'Unfurnished'
                  ].map((furnishing) => (
                    <label key={furnishing} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.furnishing.has(furnishing)}
                        onChange={() => toggleFilter('furnishing', furnishing)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{furnishing}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <h3 className="font-medium mb-2">Status</h3>
                <div className="space-y-2">
                  {[
                    'Ready to move',
                    'Under construction'
                  ].map((status) => (
                    <label key={status} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.status.has(status)}
                        onChange={() => toggleFilter('status', status)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{status}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-64">
                <Loader className="w-12 h-12 text-blue-600 animate-spin mb-4" />
                <p className="text-gray-600">Finding the best properties for you...</p>
              </div>
            ) : filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No properties found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;