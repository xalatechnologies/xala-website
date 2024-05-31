"use client";

import { Service } from '@/lib/interfaces';

const ServiceList = ({ services }: { services: Service[] }) => {
  return (
    <div className="container mx-auto p-4">
      {services.map((service) => (
        <div key={service.id} className="mb-4 p-4 border">
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
