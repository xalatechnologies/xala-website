"use client";

import { Service } from '@/lib/interfaces';
import ServiceCard from '../cards/ServiceCard';

const ServiceList = ({ services }: { services: Service[] }) => {
  return (
    <div className="container mx-auto p-4">
     {services.map((service: Service) => (
        <ServiceCard service={service} key={service.id} />
      ))}
    </div>
  );
};

export default ServiceList;
