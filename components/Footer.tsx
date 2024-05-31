"use client";

const ClientFooter = ({ footerContent }: { footerContent: string }) => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>{footerContent}</p>
    </footer>
  );
};

export default ClientFooter;
