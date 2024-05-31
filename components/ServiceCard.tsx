const ServiceCard = ({ title, description }: { title: string; description: string }) => (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-80">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
  
  export default ServiceCard;
  