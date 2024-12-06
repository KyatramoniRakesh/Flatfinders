import React, { useState } from 'react';
import { Search, MapPin, Building, IndianRupee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');

  const locations = [
    'Kokapet',
    'Manikonda',
    'Financial District',
    'Gachibowli',
    'HITEC City',
    'Kondapur',
    'Madhapur',
    'Kukatpally',
    'Jubilee Hills',
    'Banjara Hills'
  ];

  const propertyTypes = ['1 BHK', '2 BHK', '3 BHK', '4+ BHK', 'Villa', 'Plot', 'Commercial'];
  const budgetRanges = [
    'Below ₹50 Lac',
    '₹50 Lac - 1 Cr',
    '₹1 Cr - 2 Cr',
    '₹2 Cr - 5 Cr',
    'Above ₹5 Cr'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (propertyType) params.append('type', propertyType);
    if (budget) params.append('budget', budget);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl mx-auto -mt-6 sm:-mt-8 relative z-10 m-4 sm:mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <select
            className="input-field pl-10 appearance-none text-sm sm:text-base"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Building className="h-5 w-5 text-gray-400" />
          </div>
          <select
            className="input-field pl-10 appearance-none text-sm sm:text-base"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Property Type</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IndianRupee className="h-5 w-5 text-gray-400" />
          </div>
          <select
            className="input-field pl-10 appearance-none text-sm sm:text-base"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Budget</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-primary flex items-center justify-center text-sm sm:text-base">
          <Search className="h-5 w-5 mr-2" />
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;