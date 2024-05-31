"use client";

const ClientFooter = ({ footerContent }: { footerContent: string }) => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p dangerouslySetInnerHTML={{ __html: footerContent }} />
    </footer>
  );
};

export default ClientFooter;
