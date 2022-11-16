export interface IJob {
  id: string;
  title: string;
  description: string;
  pictures: string[];
  picture?: string;
  phone: string;
  name: string;
  address: string;
  benefits: string[];
  createdAt: string;
  updatedAt?: string;
  email: string;
  salary: string;
  employment_type: string[];
  location?: { lat: number; long: number };
}
