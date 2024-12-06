import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { 
  IndianRupee, 
  Bed, 
  Bath, 
  Maximize, 
  Calendar,
  Compass,
  Car,
  Building,
  Check,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import ImageWithLoader from '../components/ImageWithLoader';
import ShareButtons from '../components/ShareButtons';
import PrintButton from '../components/PrintButton';

const property = {
  id: '1',
  title: 'Luxury Apartment in Gachibowli',
  type: 'Apartment',
  price: 15000000,
  location: 'Financial District, Gachibowli, Hyderabad',
  area: 1850,
  bedrooms: 3,
  bathrooms: 3,
  description: 'Premium 3BHK apartment with modern amenities and spectacular city views. This well-designed apartment offers spacious rooms, modern fittings, and is part of a gated community with excellent facilities.',
  features: ['Swimming Pool', 'Gym', 'Security', 'Power Backup', 'Club House', 'Children\'s Play Area'],
  images: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  ],
  isFeatured: true,
  postedDate: '2024-03-15',
  propertyAge: '2 years',
  furnishing: 'Semi-Furnished',
  facing: 'East',
  floor: '12th',
  totalFloors: 15,
  carParking: 2,
  status: 'Ready to move',
  possession: 'Immediate'
};

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const printContentRef = useRef<HTMLDivElement>(null);
  const currentUrl = window.location.href;

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `${(price / 100000).toFixed(2)} Lac`;
    }
    return price.toLocaleString('en-IN');
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? property.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="w-full h-full flex items-center justify-center p-4">
            <ImageWithLoader
              src={property.images[selectedImageIndex]}
              alt={`${property.title} - ${selectedImageIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  selectedImageIndex === index ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" ref={printContentRef}>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="col-span-2">
              <ImageWithLoader
                src={property.images[0]}
                alt={property.title}
                className="w-full h-[400px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImageIndex(0)}
              />
            </div>
            <div className="grid grid-cols-3 col-span-2 gap-4">
              {property.images.slice(1).map((image, index) => (
                <ImageWithLoader
                  key={index}
                  src={image}
                  alt={`${property.title} - ${index + 2}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImageIndex(index + 1)}
                />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{property.title}</h1>
            <p className="text-gray-600 mb-6">{property.location}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <Bed className="h-5 w-5 mr-2" />
                <span>{property.bedrooms} Beds</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Bath className="h-5 w-5 mr-2" />
                <span>{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Maximize className="h-5 w-5 mr-2" />
                <span>{property.area} sqft</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{property.propertyAge}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 mb-6">{property.description}</p>

              <h2 className="text-xl font-semibold mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8 no-print">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold mb-4">Share Property</h3>
                <ShareButtons url={currentUrl} title={property.title} />
              </div>
              <PrintButton contentRef={printContentRef} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <div className="flex items-center text-3xl font-bold text-blue-600 mb-6">
              <IndianRupee className="h-6 w-6" />
              <span>{formatPrice(property.price)}</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between text-gray-700">
                <span>Status</span>
                <span className="font-semibold">{property.status}</span>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <span>Possession</span>
                <span className="font-semibold">{property.possession}</span>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <span>Furnishing</span>
                <span className="font-semibold">{property.furnishing}</span>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <Compass className="h-5 w-5" />
                <span className="font-semibold">{property.facing} Facing</span>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <Building className="h-5 w-5" />
                <span className="font-semibold">Floor {property.floor} of {property.totalFloors}</span>
              </div>
              <div className="flex items-center justify-between text-gray-700">
                <Car className="h-5 w-5" />
                <span className="font-semibold">{property.carParking} Car Parking</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mb-4">
              Contact Owner
            </button>
            <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-md hover:bg-blue-50">
              Save Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;