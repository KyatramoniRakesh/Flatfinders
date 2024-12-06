import React from 'react';
import { Link } from 'react-router-dom';
import { IndianRupee, Bed, Bath, Maximize, Calendar } from 'lucide-react';
import type { Property } from '../types';
import ImageWithLoader from './ImageWithLoader';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `${(price / 100000).toFixed(2)} Lac`;
    }
    return price.toLocaleString('en-IN');
  };

  return (
    <Link to={`/property/${property.id}`} className="block h-full">
      <div className="card h-full flex flex-col animate-fade-in">
        <div className="relative aspect-w-16 aspect-h-9">
          <ImageWithLoader
            src={property.images[0]}
            alt={property.title}
            className="w-full h-[240px] object-cover rounded-t-lg"
          />
          {property.isFeatured && (
            <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <div className="mb-2">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {property.title}
              </h3>
              <div className="flex items-center text-blue-600 font-bold whitespace-nowrap">
                <IndianRupee className="h-4 w-4" />
                <span>{formatPrice(property.price)}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-1 line-clamp-1">{property.location}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-3 text-sm">
            <div className="flex items-center text-gray-600">
              <Bed className="h-4 w-4 mr-1 flex-shrink-0" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Bath className="h-4 w-4 mr-1 flex-shrink-0" />
              <span>{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Maximize className="h-4 w-4 mr-1 flex-shrink-0" />
              <span>{property.area} sqft</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
              <span>{property.propertyAge}</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-gray-500 mt-auto pt-3 border-t">
            <span>{property.type}</span>
            <span>{property.status}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;