import React from 'react';
import Container from '@/src/shared/layouts/Container';

const ContainerDemo: React.FC = () => {
  return (
    <Container>
      <div className="flex justify-center items-center h-screen bg-red-50">
        Layout Container
      </div>
    </Container>
  );
};

export default ContainerDemo;
