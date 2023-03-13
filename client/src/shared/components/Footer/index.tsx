import React from 'react';

interface FooterProps {
  alignment: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children, alignment }) => {
  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white text-white border-t-2">
      <div className={`container mx-auto flex ${alignmentClasses[alignment]} py-3`}>
        {children}
      </div>
    </footer>
  );
};

export default Footer;
