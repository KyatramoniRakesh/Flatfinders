export interface Property {
  id: string;
  title: string;
  type: string;
  price: number;
  location: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  images: string[];
  isFeatured: boolean;
  postedDate: string;
  propertyAge: string;
  furnishing: string;
  facing: string;
  floor: string;
  totalFloors: number;
  carParking: number;
  status: 'Ready to move' | 'Under construction';
  possession: string;
}