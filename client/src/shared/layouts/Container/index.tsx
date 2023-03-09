import React from 'react';

interface ContainerProps {
  children: any;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return <div className="container mx-auto px-20">{children}</div>;
};

export default Container;
