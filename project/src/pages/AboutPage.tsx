import React from 'react';
import { Building2, Users, Award, Shield, Clock, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About FLAT FINDERS</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Your trusted partner in finding the perfect home in Hyderabad. We're committed to making your property search journey smooth and successful.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] mb-12 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Modern Office Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent flex items-center">
          <div className="text-white p-8 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">15+ Years of Excellence</h2>
            <p className="text-lg">
              Helping thousands of families find their dream homes since 2009
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Users className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
          <p className="text-gray-600">
            Our experienced professionals are here to guide you through every step of your property journey.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Award className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
          <p className="text-gray-600">
            Known for our transparency and reliability in the real estate market.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <Shield className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Verified Properties</h3>
          <p className="text-gray-600">
            All properties undergo thorough verification for your peace of mind.
          </p>
        </div>
      </div>

      {/* Company Stats */}
      <div className="bg-blue-600 text-white rounded-xl p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-blue-100">Properties Listed</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">15,000+</div>
            <div className="text-blue-100">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-blue-100">Expert Agents</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">20+</div>
            <div className="text-blue-100">Cities Covered</div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Choose FLAT FINDERS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Response Time</h3>
              <p className="text-gray-600">
                Our team ensures prompt responses to all your queries and requirements.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of Hyderabad's real estate market and neighborhoods.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Building2 className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Diverse Portfolio</h3>
              <p className="text-gray-600">
                Wide range of properties to suit every budget and preference.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Shield className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-600">
                Ensuring safe and transparent property transactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          To revolutionize the real estate experience by providing transparent, efficient, and personalized property solutions that help people find their perfect homes while maintaining the highest standards of professional integrity.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;