"use client";

import { FC } from 'react';

interface ClientFooterProps {
  footerContent: string;
}

const ClientFooter: FC<ClientFooterProps> = ({ footerContent }) => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      {footerContent}
    </footer>
  );
};

export default ClientFooter;
