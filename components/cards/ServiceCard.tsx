import { Service } from "@/lib/interfaces";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-80">
      <h2 className="text-xl font-bold mb-2">{service.title}</h2>
      <p>{service.description}</p>
    </div>
  )
};

export default ServiceCard;
