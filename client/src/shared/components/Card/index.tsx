import React from 'react';

interface CardProps {
  height: string
  title: string
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ height, title, children }: CardProps) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3">
      <div
        className={`bg-white rounded-lg overflow-hidden shadow-lg ${height} w-auto`}
      >
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  height: '',
  title: '',
  children: React.ReactNode
};

export default Card;
